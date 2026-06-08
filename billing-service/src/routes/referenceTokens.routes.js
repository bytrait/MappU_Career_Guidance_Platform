const express = require('express');

const counsellorOrInternalAuth = require('../middlewares/counsellorOrInternalAuth.middleware');
const referenceTokenPriceController = require('../controllers/referenceTokenPrice.controller');

const router = express.Router();

router.use(counsellorOrInternalAuth);

router.get('/prices', referenceTokenPriceController.getBatchPrices);

router.post('/prices/batch', referenceTokenPriceController.getBatchPrices);

module.exports = router;
