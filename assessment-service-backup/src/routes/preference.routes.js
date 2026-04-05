const express = require('express');
const router = express.Router();

const preferenceController = require('../controllers/preference.controller');
const validate = require('../middlewares/validate.middleware');
const { preferenceSchema } = require('../validators/preference.validation');
const verifyAuthToken = require('../middlewares/auth.middleware');
const checkRole = require('../middlewares/role.middleware');
const verifyStudentOwnershipMiddleware = require('../middlewares/verifyStudentOwnership.middleware');

// Save or update user preference
router.post(
  '/',
  validate(preferenceSchema),
  verifyAuthToken,
  checkRole('STUDENT'),
  preferenceController.setPreference
);

router.get('/', verifyAuthToken,checkRole('STUDENT'), preferenceController.getPreferenceController)
router.get(
  '/:studentId',
  verifyAuthToken,
  checkRole('COUNSELLOR'),
  verifyStudentOwnershipMiddleware,
  preferenceController.getPreferenceForStudent
);


module.exports = router;
