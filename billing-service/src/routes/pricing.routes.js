// src/routes/pricing.routes.js

const express = require('express');

const pricingController = require('../controllers/pricing.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get(
  '/',
  authMiddleware,
  pricingController.getPricingConfig
);

router.post(
  '/',
  authMiddleware,
  pricingController.upsertPricingConfig
);

router.patch(
  '/payment-toggle',
  authMiddleware,
  pricingController.togglePaymentStatus
);

router.patch(
  '/individual-price',
  authMiddleware,
  pricingController.updateIndividualPrice
);

module.exports = router;