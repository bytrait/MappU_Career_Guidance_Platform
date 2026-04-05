const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessment.controller');
const validate = require('../middlewares/validate.middleware');
const { getAssessmentQuestionsSchema, submitScoresSchema } = require('../validators/assessment.validator');
const verifyAuthToken = require('../middlewares/auth.middleware');
const checkRole = require('../middlewares/role.middleware');
const verifyStudentOwnership = require('../middlewares/verifyStudentOwnership.middleware');

router.get('/questions', validate(getAssessmentQuestionsSchema),verifyAuthToken,checkRole("STUDENT"), assessmentController.getQuestions);
router.post('/submit-scores', validate(submitScoresSchema),verifyAuthToken,checkRole("STUDENT"), assessmentController.saveAssessmentScores);
router.get('/scores',verifyAuthToken,checkRole("STUDENT"), assessmentController.getAssessmentScoresByUserId);
// Counsellor view student scores
router.get(
  '/scores/:studentId',
  verifyAuthToken,
  checkRole('COUNSELLOR'),
  verifyStudentOwnership,
  assessmentController.getAssessmentScoresForStudent
);


module.exports = router;
