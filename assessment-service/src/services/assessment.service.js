const logger = require('../utils/logger.util');
const prisma = require('../utils/prisma.util');

const getQuestionsByTypeAndLanguage = async (assessmentType) => {
  try {
    logger.debug(`[AssessmentService] Prisma query started for type=${assessmentType}, all languages`);

    const traits = await prisma.assessmentTrait.findMany({
      where: { assessmentType },
      select: {
        id: true,
        code: true,
        name: true,
        questions: {
          orderBy: { order: 'asc' },
          select: {
            id: true,
            order: true,
            reverse: true,
            translations: {
              select: {
                id: true,
                language: true,
                text: true,
              },
            },
            // MCQ options only for APTITUDE; Likert types (OCEAN/RIASEC/EQ/LEARNING) omit options
            ...(assessmentType === 'APTITUDE'
              ? {
                  options: {
                    orderBy: { order: 'asc' },
                    select: {
                      id: true,
                      isCorrect: true,
                      translations: {
                        select: {
                          id: true,
                          language: true,
                          text: true,
                        },
                      },
                    },
                  },
                }
              : {}),
          },
        },
      },
      orderBy: { code: 'asc' },
    });

    logger.debug(`[AssessmentService] Retrieved ${traits.length} traits from DB`);
    return traits;
  } catch (err) {
    logger.error(`[AssessmentService] Error in DB fetch: ${err.message}`, {
      stack: err.stack,
    });
    throw err;
  }
};


const saveAssessmentScores = async (scores,userId) => {
  try {
    const data = scores.map(score => ({
      userId: userId,
      assessmentType: score.assessmentType,
      traitOrCategoryCode: score.traitOrCategoryCode,
      score: Math.round(score.score),
    }));

    await prisma.assessmentScore.createMany({ data });

    logger.info(`[AssessmentService] Saved ${scores.length} scores for user ${scores[0]?.userId}`);
    return { count: scores.length };
  } catch (err) {
    logger.error(`[AssessmentService] Failed to save scores: ${err.message}`, { stack: err.stack });
    throw err;
  }
};

const getAssessmentScoresByUserId = async (userId) => {
  try {
    const scores = await prisma.assessmentScore.findMany({
      where: { userId },
      select: {
        id: true,
        assessmentType: true,
        traitOrCategoryCode: true,
        score: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    logger.info(`[AssessmentService] Retrieved ${scores.length} scores for user ${userId}`);
    return scores;
  } catch (err) {
    logger.error(`[AssessmentService] Failed to fetch scores for user ${userId}: ${err.message}`, { stack: err.stack });
    throw err;
  }
};

module.exports = {
  getQuestionsByTypeAndLanguage,
  saveAssessmentScores,
  getAssessmentScoresByUserId,
};
