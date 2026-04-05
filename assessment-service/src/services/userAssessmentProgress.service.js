const prisma = require('../utils/prisma.util');
const logger = require('../utils/logger.util');

async function getProgressByUserId(userId) {
  try {
    logger.debug(`[UserAssessmentProgressService] Fetching progress for userId=${userId}`);
    return await prisma.userAssessmentProgress.findUnique({
      where: { userId },
    });
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to fetch progress: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

async function startProgress(userId, stage) {
  try {
    logger.info(`[UserAssessmentProgressService] Starting progress for userId=${userId}, stage=${stage}`);
    return await prisma.userAssessmentProgress.create({
      data: { userId, currentStage: stage },
    });
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to start progress: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

async function updateProgress(userId, stage) {
  try {
    logger.info(`[UserAssessmentProgressService] Updating progress for userId=${userId}, new stage=${stage}`);
    return await prisma.userAssessmentProgress.update({
      where: { userId },
      data: { currentStage: stage },
    });
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to update progress: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

async function markProgressComplete(userId) {
  try {
    logger.info(`[UserAssessmentProgressService] Marking progress complete for userId=${userId}`);
    return await prisma.userAssessmentProgress.update({
      where: { userId },
      data: { currentStage: null },
    });
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to mark complete: ${err.message}`, { stack: err.stack });
    throw err;
  }
}


async function getBulkAssessmentStatus(userIds) {
  if (!Array.isArray(userIds) || userIds.length === 0) {
    throw new Error("userIds must be a non-empty array");
  }

  const progressRecords = await prisma.userAssessmentProgress.findMany({
    where: {
      userId: {
        in: userIds,
      },
    },
    select: {
      userId: true,
      currentStage: true,
    },
  });

  const progressMap = new Map(
    progressRecords.map((record) => [
      record.userId,
      record.currentStage,
    ])
  );

  return userIds.map((userId) => {
    if (!progressMap.has(userId)) {
      return { userId, status: "NOT_STARTED" };
    }

    const currentStage = progressMap.get(userId);

    if (currentStage === null) {
      return { userId, status: "COMPLETED" };
    }

    return { userId, status: "IN_PROGRESS" };
  });
};


module.exports = {
  getProgressByUserId,
  startProgress,
  updateProgress,
  markProgressComplete,
  getBulkAssessmentStatus,
};
