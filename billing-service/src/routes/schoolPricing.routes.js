// src/routes/schoolPricing.routes.js
// @deprecated Legacy counsellor school pricing API. New flows use /reference-token-internal.

const express = require('express');

const schoolPricingController = require('../controllers/schoolPricing.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get(
  '/',
  authMiddleware,
  schoolPricingController.getSchoolPricingList
);

router.post(
  '/',
  authMiddleware,
  schoolPricingController.createSchoolPricing
);

router.put(
  '/:id',
  authMiddleware,
  schoolPricingController.updateSchoolPricing
);

router.delete(
  '/:id',
  authMiddleware,
  schoolPricingController.deleteSchoolPricing
);

module.exports = router;