// billing-service/src/services/studentPaymentInternal.service.js

const prisma = require('../utils/prisma.util');

const createStudentPaymentRecord = async ({
  studentId,
  counsellorId,
  registrationType,
  schoolId = null,
  schoolName = null,
  referenceCode = null,
}) => {
  const existingPayment = await prisma.studentPayment.findUnique({
    where: {
      studentId,
    },
  });

  if (existingPayment) {
    return existingPayment;
  }

  const pricingConfig =
    await prisma.counsellorPricingConfig.findUnique({
      where: {
        counsellorId,
      },
    });

  let amount = 0;
  let status = 'FREE';

  if (pricingConfig?.paymentEnabled) {
    if (registrationType === 'INDIVIDUAL') {
      amount = pricingConfig.individualPrice || 0;
    }

    if (registrationType === 'SCHOOL' && schoolId) {
      const schoolPricing =
        await prisma.schoolPricing.findFirst({
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

  return prisma.studentPayment.create({
    data: {
      studentId,
      counsellorId,
      registrationType,
      schoolId,
      schoolName,
      referenceCode,
      amount,
      status,
    },
  });
};

module.exports = {
  createStudentPaymentRecord,
};