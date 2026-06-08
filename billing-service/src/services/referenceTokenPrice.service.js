const prisma = require('../utils/prisma.util');

/** Canonical billing key = auth ReferenceCode.id (API: referenceTokenId / tokenId). */
const MAX_BATCH_TOKEN_IDS = 100;

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const normalizeCode = (code) => String(code).trim().toUpperCase();

const createHttpError = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

const upsertReferenceTokenPrice = async ({
  tokenId,
  code,
  type,
  targetId,
  counsellorId,
  price,
  currency = 'INR',
  startDate,
  expiryDate,
  label,
}) => {
  if (!tokenId || !code) {
    throw createHttpError('tokenId and code are required');
  }

  if (!counsellorId || !type || !targetId) {
    throw createHttpError('counsellorId, type, and targetId are required');
  }

  if (price === undefined || price === null || Number(price) < 0) {
    throw createHttpError('price must be a non-negative number');
  }

  const normalizedCurrency = String(currency).trim().toUpperCase();
  if (!/^[A-Z]{3}$/.test(normalizedCurrency)) {
    throw createHttpError('currency must be a 3-letter ISO code');
  }

  const normalizedType = String(type).trim().toUpperCase();
  if (!['COUNSELLOR', 'SCHOOL'].includes(normalizedType)) {
    throw createHttpError('type must be COUNSELLOR or SCHOOL');
  }

  const normalizedCode = normalizeCode(code);
  const amount = Math.round(Number(price));

  return prisma.referenceTokenPrice.upsert({
    where: { tokenId },
    create: {
      tokenId,
      code: normalizedCode,
      counsellorId,
      type: normalizedType,
      targetId,
      amount,
      currency: normalizedCurrency,
      label: label || null,
      startDate: startDate ? new Date(startDate) : null,
      expiryDate: expiryDate ? new Date(expiryDate) : null,
      isActive: true,
    },
    update: {
      code: normalizedCode,
      counsellorId,
      type: normalizedType,
      targetId,
      amount,
      currency: normalizedCurrency,
      label: label ?? undefined,
      startDate: startDate ? new Date(startDate) : null,
      expiryDate: expiryDate ? new Date(expiryDate) : null,
      isActive: true,
    },
  });
};

const deactivateReferenceTokenPrice = async ({ tokenId }) => {
  if (!tokenId) {
    throw createHttpError('tokenId is required');
  }

  const existing = await prisma.referenceTokenPrice.findUnique({
    where: { tokenId },
  });

  if (!existing) {
    return { tokenId, isActive: false };
  }

  if (!existing.isActive) {
    return existing;
  }

  return prisma.referenceTokenPrice.update({
    where: { tokenId },
    data: { isActive: false },
  });
};

const findByTokenId = async (tokenId) => {
  if (!tokenId) {
    return null;
  }

  return prisma.referenceTokenPrice.findUnique({
    where: { tokenId },
  });
};

const findByCode = async (code) => {
  if (!code) {
    return null;
  }

  return prisma.referenceTokenPrice.findUnique({
    where: { code: normalizeCode(code) },
  });
};

const findActiveTokenPrice = async ({ referenceCodeId, referenceCode }) => {
  const hasId =
    referenceCodeId != null && String(referenceCodeId).trim() !== '';

  if (hasId) {
    const byId = await findByTokenId(referenceCodeId);
    return byId?.isActive ? byId : null;
  }

  const hasCode = referenceCode != null && String(referenceCode).trim() !== '';

  if (hasCode) {
    const byCode = await findByCode(referenceCode);
    return byCode?.isActive ? byCode : null;
  }

  return null;
};

const parseTokenIds = (raw) => {
  let ids = [];

  if (Array.isArray(raw)) {
    ids = raw;
  } else if (typeof raw === 'string') {
    ids = raw.split(',').map((part) => part.trim());
  }

  const tokenIds = ids.filter((id) => id !== '');

  if (tokenIds.length === 0) {
    throw createHttpError('tokenIds is required');
  }

  if (tokenIds.length > MAX_BATCH_TOKEN_IDS) {
    throw createHttpError(
      `tokenIds must not exceed ${MAX_BATCH_TOKEN_IDS} items`
    );
  }

  const invalid = tokenIds.filter((id) => !UUID_RE.test(id));
  if (invalid.length > 0) {
    throw createHttpError('tokenIds must be valid UUIDs');
  }

  const seen = new Set();
  const unique = [];
  for (const id of tokenIds) {
    const key = id.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(id);
    }
  }

  return unique;
};

const toBatchPriceItem = (tokenId, row) => {
  if (!row) {
    return {
      tokenId,
      price: null,
      currency: null,
      updatedAt: null,
    };
  }

  return {
    tokenId: row.tokenId,
    price: row.amount,
    currency: row.currency,
    updatedAt: row.updatedAt.toISOString(),
  };
};

/**
 * Batch read prices by auth reference token id (stored as tokenId).
 * Returns null price for tokens with no billing row; 403 if a row exists for another counsellor.
 */
const getBatchPricesByTokenIds = async ({ tokenIds, counsellorId }) => {
  if (!counsellorId) {
    throw createHttpError('counsellorId is required');
  }

  const uniqueIds = parseTokenIds(tokenIds);

  const rows = await prisma.referenceTokenPrice.findMany({
    where: { tokenId: { in: uniqueIds } },
  });

  const rowByTokenId = new Map(rows.map((row) => [row.tokenId, row]));

  for (const tokenId of uniqueIds) {
    const row = rowByTokenId.get(tokenId);
    if (row && row.counsellorId !== counsellorId) {
      const error = new Error('One or more reference tokens are not accessible');
      error.status = 403;
      throw error;
    }
  }

  return uniqueIds.map((tokenId) =>
    toBatchPriceItem(tokenId, rowByTokenId.get(tokenId))
  );
};

const getPriceByCodeForDisplay = async (code) => {
  const normalizedCode = normalizeCode(code);
  const tokenPrice = await findByCode(normalizedCode);

  if (!tokenPrice) {
    throw createHttpError('Reference token price not found', 404);
  }

  return {
    tokenId: tokenPrice.tokenId,
    code: tokenPrice.code,
    amount: tokenPrice.amount,
    currency: tokenPrice.currency,
    isActive: tokenPrice.isActive,
  };
};

module.exports = {
  upsertReferenceTokenPrice,
  deactivateReferenceTokenPrice,
  findByTokenId,
  findByCode,
  findActiveTokenPrice,
  getBatchPricesByTokenIds,
  getPriceByCodeForDisplay,
  parseTokenIds,
  normalizeCode,
  MAX_BATCH_TOKEN_IDS,
};
