// src/routes/studentPayment.routes.js

const express = require('express');

const authMiddleware = require('../middlewares/auth.middleware');
const studentPaymentController = require('../controllers/studentPayment.controller');

const router = express.Router();

router.get(
  '/status',
  authMiddleware,
  studentPaymentController.getStudentPaymentStatus
);

router.post(
  '/create-order',
  authMiddleware,
  studentPaymentController.createStudentPaymentOrder
);

router.post(
  '/verify',
  authMiddleware,
  studentPaymentController.verifyStudentPayment
);

module.exports = router;