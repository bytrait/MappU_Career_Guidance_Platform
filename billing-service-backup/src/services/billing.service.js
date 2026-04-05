const prisma = require("../utils/prisma.util");
const logger = require("../utils/logger.util");

exports.consumeCredit = async ({ counsellorId, requestId }) => {
  if (!counsellorId) {
    throw new Error("CounsellorId is required");
  }

  return prisma.$transaction(async (tx) => {
    // 🔐 Lock the row for update
    const credit = await tx.counsellorCredit.findUnique({
      where: { counsellorId }
    });

    if (!credit) {
      logger.warn("Credit account not found", {
        requestId,
        counsellorId
      });

      const error = new Error("No credit account found");
      error.status = 403;
      throw error;
    }

    const availableCredits = credit.totalCredits - credit.usedCredits;

    if (availableCredits <= 0) {
      logger.warn("Credit limit reached", {
        requestId,
        counsellorId,
        totalCredits: credit.totalCredits,
        usedCredits: credit.usedCredits
      });

      const error = new Error("Registration limit reached");
      error.status = 403;
      throw error;
    }

    // 🔥 Decrement credit safely
    await tx.counsellorCredit.update({
      where: { counsellorId },
      data: {
        usedCredits: {
          increment: 1
        }
      }
    });

    // Add credit transaction for the consumed credit
    await tx.creditTransaction.create({
      data: {
        counsellorId,
        type: "CONSUME",
        amount: -1,
        description: "Credit used for student registration"
      }
    });

    logger.info("Credit consumed successfully", {
      requestId,
      counsellorId
    });

    return true;
  });
};

exports.refundCredit = async ({ counsellorId, requestId }) => {
  return prisma.$transaction(async (tx) => {
    const credit = await tx.counsellorCredit.findUnique({
      where: { counsellorId }
    });

    if (!credit || credit.usedCredits <= 0) {
      logger.warn("Refund failed — no used credits", {
        requestId,
        counsellorId
      });

      return;
    }

    // 🔥 Decrement used credits
    await tx.counsellorCredit.update({
      where: { counsellorId },
      data: {
        usedCredits: {
          decrement: 1
        }
      }
    });

    // Add credit transaction for the refunded credit
    await tx.creditTransaction.create({
      data: {
        counsellorId,
        type: "REFUND",
        amount: 1,
        description: "Credit refunded due to registration failure"
      }
    });

    logger.info("Credit refunded successfully", {
      requestId,
      counsellorId
    });
  });
};
