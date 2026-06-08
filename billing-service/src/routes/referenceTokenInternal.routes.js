const express = require('express');

const internalAuthMiddleware = require('../middlewares/internalAuth.middleware');
const referenceTokenPriceInternalController = require('../controllers/referenceTokenPriceInternal.controller');

const router = express.Router();

router.use(internalAuthMiddleware);

router.post(
  '/reference-token-price/upsert',
  referenceTokenPriceInternalController.upsertReferenceTokenPrice
);

router.post(
  '/reference-token-price/deactivate',
  referenceTokenPriceInternalController.deactivateReferenceTokenPrice
);

router.get(
  '/reference-token-price/by-code',
  referenceTokenPriceInternalController.getReferenceTokenPriceByCode
);

module.exports = router;
