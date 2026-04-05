const progressService = require('../services/userAssessmentProgress.service');
const logger = require('../utils/logger.util');
const axios = require('axios');

const getProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    logger.debug(`[UserAssessmentProgressController] Getting progress for userId=${userId}`);

    const progress = await progressService.getProgressByUserId(userId);
    res.status(200).json({ success: true, data: progress });
  } catch (err) {
    logger.error(`[UserAssessmentProgressController] Error getting progress: ${err.message}`);
    next(err);
  }
};

const startProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { stage } = req.body;
    logger.debug(`[UserAssessmentProgressController] Starting progress for userId=${userId}, stage=${stage}`);

    const progress = await progressService.startProgress(userId, stage);
    res.status(201).json({ success: true, data: progress });
  } catch (err) {
    logger.error(`[UserAssessmentProgressController] Error starting progress: ${err.message}`);
    next(err);
  }
};

const updateProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { stage } = req.body;
    logger.debug(`[UserAssessmentProgressController] Updating progress for userId=${userId} → stage=${stage}`);

    const progress = await progressService.updateProgress(userId, stage);
    res.status(200).json({ success: true, data: progress });
  } catch (err) {
    logger.error(`[UserAssessmentProgressController] Error updating progress: ${err.message}`);
    next(err);
  }
};

const completeProgress = async (req, res, next) => {
  try {
    const userId = req.user.id;
    logger.debug(`[UserAssessmentProgressController] Completing progress for userId=${userId}`);

    const progress = await progressService.markProgressComplete(userId);
    res.status(200).json({ success: true, data: progress });
  } catch (err) {
    logger.error(`[UserAssessmentProgressController] Error completing progress: ${err.message}`);
    next(err);
  }
};

const getUserDetailsByIdController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    logger.debug(`[UserAssessmentProgressController] Fetching user details for userId=${userId}`);

    const response = await axios.get(
      `${process.env.AUTH_URL}/auth/user/${userId}`,
      {
        headers: {
          Cookie: req.headers.cookie, // 🔑 forward cookies
        },
        withCredentials: true,
      }
    );
    res.status(response.status).json({ success: true, data: response.data });
  } catch (err) {
    logger.error(`[UserAssessmentProgressController] Error fetching user details: ${err.message}`);
    next(err);
  }
};

const getStudentBasicDetailsForCounsellor = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const user =
      await progressService.getProgressByUserId(studentId);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    req.logger?.error(
      '[UserAssessmentProgress] Counsellor get student failed:',
      err
    );
    next(err);
  }
};

const bulkAssessmentStatus = async (req, res, next) => {
  try {
    const { userIds } = req.body;

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({
        message: "userIds is required and must be a non-empty array",
      });
    }

    const result = await progressService.getBulkAssessmentStatus(userIds);

    return res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getProgress,
  startProgress,
  updateProgress,
  completeProgress,
  getUserDetailsByIdController,
  getStudentBasicDetailsForCounsellor,
  bulkAssessmentStatus,
};
