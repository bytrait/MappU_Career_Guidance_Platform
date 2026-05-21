// src/services/schoolPricing.service.js

const prisma = require('../utils/prisma.util');

const getSchoolPricingList = async (counsellorId) => {
  const schoolPricingList = await prisma.schoolPricing.findMany({
    where: {
      counsellorId,
      isActive: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return schoolPricingList;
};

const createSchoolPricing = async ({
  counsellorId,
  schoolId,
  schoolName,
  amount,
}) => {
  let pricingConfig =
    await prisma.counsellorPricingConfig.findUnique({
      where: {
        counsellorId,
      },
    });

  if (!pricingConfig) {
    pricingConfig =
      await prisma.counsellorPricingConfig.create({
        data: {
          counsellorId,
          paymentEnabled: true,
        },
      });
  }

  const existingSchoolPricing =
    await prisma.schoolPricing.findFirst({
      where: {
        counsellorId,
        schoolId,
      },
    });

  if (existingSchoolPricing) {
    const updatedSchoolPricing =
      await prisma.schoolPricing.update({
        where: {
          id: existingSchoolPricing.id,
        },
        data: {
          schoolName,
          amount,
          isActive: true,
        },
      });

    return updatedSchoolPricing;
  }

  const schoolPricing = await prisma.schoolPricing.create({
    data: {
      pricingConfigId: pricingConfig.id,
      counsellorId,
      schoolId,
      schoolName,
      amount,
    },
  });

  return schoolPricing;
};

const updateSchoolPricing = async (id, payload) => {
  const schoolPricing = await prisma.schoolPricing.update({
    where: {
      id,
    },
    data: payload,
  });

  return schoolPricing;
};

const deleteSchoolPricing = async (id) => {
  const schoolPricing = await prisma.schoolPricing.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });

  return schoolPricing;
};

module.exports = {
  getSchoolPricingList,
  createSchoolPricing,
  updateSchoolPricing,
  deleteSchoolPricing,
};