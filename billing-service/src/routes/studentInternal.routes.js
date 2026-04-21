// billing-service/src/routes/internal.routes.js

const express = require('express');

const internalAuthMiddleware = require('../middlewares/internalAuth.middleware');
const studentPaymentInternalController = require('../controllers/studentPaymentInternal.controller');

const router = express.Router();

router.post(
  '/student-payment/create',
  internalAuthMiddleware,
  studentPaymentInternalController.createStudentPaymentRecord
);

module.exports = router;