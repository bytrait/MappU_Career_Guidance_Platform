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

async function getAssessmentState(userId, assessmentType) {
  try {
    logger.debug(`[UserAssessmentProgressService] Fetching state for userId=${userId}, type=${assessmentType}`);
    const state = await prisma.userAssessmentState.findUnique({
      where: {
        userId_assessmentType: {
          userId,
          assessmentType,
        },
      },
    });
    return state || { currentQuestionIndex: 0, answers: {} };
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to fetch assessment state: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

async function saveAssessmentState(userId, { assessmentType, currentQuestionIndex = 0, answers = {} }) {
  try {
    logger.debug(`[UserAssessmentProgressService] Saving state for userId=${userId}, type=${assessmentType}, index=${currentQuestionIndex}`);
    return await prisma.userAssessmentState.upsert({
      where: {
        userId_assessmentType: {
          userId,
          assessmentType,
        },
      },
      create: {
        userId,
        assessmentType,
        currentQuestionIndex,
        answers,
      },
      update: {
        currentQuestionIndex,
        answers,
      },
    });
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to save assessment state: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

async function clearAssessmentState(userId, assessmentType) {
  try {
    logger.debug(`[UserAssessmentProgressService] Clearing state for userId=${userId}, type=${assessmentType}`);
    if (assessmentType) {
      await prisma.userAssessmentState.deleteMany({
        where: { userId, assessmentType },
      });
    } else {
      await prisma.userAssessmentState.deleteMany({
        where: { userId },
      });
    }
    return { success: true };
  } catch (err) {
    logger.error(`[UserAssessmentProgressService] Failed to clear assessment state: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

module.exports = {
  getProgressByUserId,
  startProgress,
  updateProgress,
  markProgressComplete,
  getBulkAssessmentStatus,
  getAssessmentState,
  saveAssessmentState,
  clearAssessmentState,
};
