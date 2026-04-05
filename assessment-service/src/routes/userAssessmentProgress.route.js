const express = require('express');
const controller = require('../controllers/userAssessmentProgress.controller');
const verifyAuthToken = require('../middlewares/auth.middleware');
const checkRole = require('../middlewares/role.middleware');
const verifyStudentOwnershipMiddleware = require('../middlewares/verifyStudentOwnership.middleware');

const router = express.Router();

router.get('/', verifyAuthToken, checkRole("STUDENT"), controller.getProgress);
router.post('/start', verifyAuthToken, checkRole("STUDENT"), controller.startProgress);
router.patch('/update', verifyAuthToken, checkRole("STUDENT"), controller.updateProgress);
router.patch('/complete', verifyAuthToken, checkRole("STUDENT"), controller.completeProgress);
router.get('/user', verifyAuthToken, checkRole("STUDENT"), controller.getUserDetailsByIdController);
router.get(
  '/student/:studentId',
  verifyAuthToken,
  checkRole('COUNSELLOR'),
  verifyStudentOwnershipMiddleware,
  controller.getStudentBasicDetailsForCounsellor
);
router.post("/status/bulk", verifyAuthToken, checkRole("COUNSELLOR"), controller.bulkAssessmentStatus);


module.exports = router;
