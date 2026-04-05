const prisma = require("../utils/prisma.util");
const logger = require("../utils/logger.util");

const FREE_SIGNUP_CREDITS = Number(process.env.FREE_SIGNUP_CREDITS || 2);

exports.getCreditSummary = async ({ counsellorId, requestId }) => {

  const credit = await prisma.counsellorCredit.findUnique({
    where: { counsellorId }
  });

  if (!credit) {
    logger.info("Credit summary requested — no credit account", {
      requestId,
      counsellorId
    });

    return {
      totalCredits: 0,
      usedCredits: 0,
      availableCredits: 0
    };
  }

  const availableCredits =
    credit.totalCredits - credit.usedCredits;

  logger.info("Credit summary fetched", {
    requestId,
    counsellorId,
    totalCredits: credit.totalCredits,
    usedCredits: credit.usedCredits
  });

  return {
    totalCredits: credit.totalCredits,
    usedCredits: credit.usedCredits,
    availableCredits
  };
};

exports.getCreditHistory = async ({
  counsellorId,
  page = 1,
  limit = 20,
  type,
  from,
  to,
  requestId
}) => {

  const skip = (page - 1) * limit;

  const whereClause = {
    counsellorId
  };

  // Filter by type
  if (type) {
    whereClause.type = type;
  }

  // Filter by date range
  if (from || to) {
    whereClause.createdAt = {};

    if (from) {
      whereClause.createdAt.gte = new Date(from);
    }

    if (to) {
      whereClause.createdAt.lte = new Date(to);
    }
  }

  const [transactions, total] = await Promise.all([
    prisma.creditTransaction.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit
    }),
    prisma.creditTransaction.count({
      where: whereClause
    })
  ]);

  return {
    data: transactions,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    }
  };
};

exports.grantSignupCredits = async ({ counsellorId, requestId }) => {
  return await prisma.$transaction(async (tx) => {

    const existingTransaction = await tx.creditTransaction.findFirst({
      where: {
        counsellorId,
        type: "SIGNUP_BONUS"
      }
    });

    if (existingTransaction) return;

    const existingCredit = await tx.counsellorCredit.findUnique({
      where: { counsellorId }
    });

    if (existingCredit) {
      await tx.counsellorCredit.update({
        where: { counsellorId },
        data: {
          totalCredits: { increment: FREE_SIGNUP_CREDITS }
        }
      });
    } else {
      await tx.counsellorCredit.create({
        data: {
          counsellorId,
          totalCredits: FREE_SIGNUP_CREDITS,
          usedCredits: 0
        }
      });
    }

    await tx.creditTransaction.create({
      data: {
        counsellorId,
        type: "SIGNUP_BONUS",
        amount: FREE_SIGNUP_CREDITS,
        description: "Free credits on counsellor signup"
      }
    });
  });
};