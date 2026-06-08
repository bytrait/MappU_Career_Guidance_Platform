const prisma = require('../utils/prisma.util');
const referenceTokenPriceService = require('./referenceTokenPrice.service');

const hasReferenceContext = (referenceCodeId, referenceCode) => {
  const id = referenceCodeId != null && String(referenceCodeId).trim() !== '';
  const code = referenceCode != null && String(referenceCode).trim() !== '';
  return id || code;
};

const createHttpError = (message, status = 400) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

const legacyResolveAmount = async ({
  counsellorId,
  registrationType,
  schoolId,
}) => {
  const pricingConfig = await prisma.counsellorPricingConfig.findUnique({
    where: { counsellorId },
  });

  let amount = 0;
  let currency = 'INR';
  let status = 'FREE';

  if (pricingConfig?.paymentEnabled) {
    if (registrationType === 'INDIVIDUAL') {
      amount = pricingConfig.individualPrice || 0;
    }

    if (registrationType === 'SCHOOL' && schoolId) {
      const schoolPricing = await prisma.schoolPricing.findFirst({
        where: {
          counsellorId,
          schoolId,
          isActive: true,
        },
      });

      amount = schoolPricing?.amount || 0;
    }

    status = amount > 0 ? 'PENDING' : 'FREE';
  }

  return { amount, currency, status };
};

const resolveAmountForRegistration = async ({
  referenceCodeId,
  referenceCode,
  counsellorId,
  registrationType,
  schoolId,
}) => {
  if (hasReferenceContext(referenceCodeId, referenceCode)) {
    const tokenPrice = await referenceTokenPriceService.findActiveTokenPrice({
      referenceCodeId,
      referenceCode,
    });

    if (!tokenPrice) {
      throw createHttpError('No price configured for this reference code');
    }

    const amount = tokenPrice.amount;
    const currency = tokenPrice.currency || 'INR';
    const status = amount > 0 ? 'PENDING' : 'FREE';

    return { amount, currency, status };
  }

  return legacyResolveAmount({
    counsellorId,
    registrationType,
    schoolId,
  });
};

const createStudentPaymentRecord = async ({
  studentId,
  counsellorId,
  registrationType,
  schoolId = null,
  schoolName = null,
  referenceCode = null,
  referenceCodeId = null,
}) => {
  const existingPayment = await prisma.studentPayment.findUnique({
    where: { studentId },
  });

  if (existingPayment) {
    return existingPayment;
  }

  const normalizedReferenceCode = referenceCode
    ? referenceTokenPriceService.normalizeCode(referenceCode)
    : null;

  const { amount, currency, status } = await resolveAmountForRegistration({
    referenceCodeId,
    referenceCode: normalizedReferenceCode,
    counsellorId,
    registrationType,
    schoolId,
  });

  return prisma.studentPayment.create({
    data: {
      studentId,
      counsellorId,
      registrationType,
      schoolId,
      schoolName,
      referenceCode: normalizedReferenceCode,
      referenceCodeId: referenceCodeId || null,
      amount,
      currency,
      status,
    },
  });
};

module.exports = {
  createStudentPaymentRecord,
  resolveAmountForRegistration,
};
