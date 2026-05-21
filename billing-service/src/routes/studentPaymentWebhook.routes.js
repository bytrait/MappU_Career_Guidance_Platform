const express = require('express');
const studentPaymentWebhookController = require('../controllers/studentPaymentWebhook.controller');

const router = express.Router();

router.post(
  '/razorpay',
  studentPaymentWebhookController.handleRazorpayWebhook
);

module.exports = router;