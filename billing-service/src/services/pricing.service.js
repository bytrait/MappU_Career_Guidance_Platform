const prisma = require('../utils/prisma.util');

const getPricingConfigByCounsellorId = async (counsellorId) => {
  const pricingConfig = await prisma.counsellorPricingConfig.findUnique({
    where: {
      counsellorId,
    },
    include: {
      schoolPrices: {
        where: {
          isActive: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });

  return pricingConfig;
};

const createPricingConfig = async ({
  counsellorId,
  paymentEnabled = true,
  individualPrice = null,
}) => {
  const existingConfig = await prisma.counsellorPricingConfig.findUnique({
    where: {
      counsellorId,
    },
  });

  if (existingConfig) {
    throw new Error('Pricing configuration already exists for this counsellor');
  }

  const pricingConfig = await prisma.counsellorPricingConfig.create({
    data: {
      counsellorId,
      paymentEnabled,
      individualPrice,
    },
  });

  return pricingConfig;
};

const updatePricingConfig = async ({
  counsellorId,
  paymentEnabled,
  individualPrice,
}) => {
  const updatedConfig = await prisma.counsellorPricingConfig.upsert({
    where: {
      counsellorId,
    },
    update: {
      ...(paymentEnabled !== undefined && { paymentEnabled }),
      ...(individualPrice !== undefined && { individualPrice }),
    },
    create: {
      counsellorId,
      paymentEnabled: paymentEnabled ?? true,
      individualPrice: individualPrice ?? null,
    },
  });

  return updatedConfig;
};

const upsertPricingConfig = async ({
  counsellorId,
  paymentEnabled = true,
  individualPrice = null,
}) => {
  const pricingConfig = await prisma.counsellorPricingConfig.upsert({
    where: {
      counsellorId,
    },
    update: {
      paymentEnabled,
      individualPrice,
    },
    create: {
      counsellorId,
      paymentEnabled,
      individualPrice,
    },
  });

  return pricingConfig;
};

const togglePaymentEnabled = async ({
  counsellorId,
  paymentEnabled,
}) => {
  const updatedConfig = await prisma.counsellorPricingConfig.upsert({
    where: {
      counsellorId,
    },
    update: {
      paymentEnabled,
    },
    create: {
      counsellorId,
      paymentEnabled,
      individualPrice: null,
    },
  });

  return updatedConfig;
};

const updateIndividualPrice = async ({
  counsellorId,
  individualPrice,
}) => {
  const updatedConfig = await prisma.counsellorPricingConfig.upsert({
    where: {
      counsellorId,
    },
    update: {
      individualPrice,
    },
    create: {
      counsellorId,
      paymentEnabled: true,
      individualPrice,
    },
  });

  return updatedConfig;
};

module.exports = {
  getPricingConfigByCounsellorId,
  createPricingConfig,
  updatePricingConfig,
  upsertPricingConfig,
  togglePaymentEnabled,
  updateIndividualPrice,
};