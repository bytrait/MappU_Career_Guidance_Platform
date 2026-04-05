const prisma = require('../utils/prisma.util');
const logger = require('../utils/logger.util');

/**
 * Upsert user preference (preferredLanguage, economicStatus)
 * @param {string} userId
 * @param {string} preferredLanguage
 * @param {string} economicStatus
 */
async function upsertPreference(userId, preferredLanguage, economicStatus) {
    if (!userId) throw new Error('userId is required');
  
    try {
      const pref = await prisma.userAssessmentPreference.upsert({
        where: { userId },
        update: { preferredLanguage, economicStatus },
        create: { userId, preferredLanguage, economicStatus },
      });
      return pref;
    } catch (err) {
      logger.error('upsertPreference error', err);
      throw err;
    }
  }
  
  /**
   * Get saved preference for a user
   * @param {string} userId
   */
  async function getPreference(userId) {
    if (!userId) throw new Error('userId is required');
  
    return prisma.userAssessmentPreference.findFirst({
      where: { userId },
      select: {
        preferredLanguage: true,
        economicStatus: true,
      },
    });
  }
  
  module.exports = {
    upsertPreference,
    getPreference,
  };