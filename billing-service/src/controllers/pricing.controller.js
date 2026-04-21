// src/controllers/pricing.controller.js

const pricingService = require('../services/pricing.service');

const getPricingConfig = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const pricingConfig =
      await pricingService.getPricingConfigByCounsellorId(
        counsellorId
      );

    return res.status(200).json({
      success: true,
      message: 'Pricing configuration fetched successfully',
      data: pricingConfig,
    });
  } catch (error) {
    next(error);
  }
};

const upsertPricingConfig = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const {
      paymentEnabled,
      individualPrice,
    } = req.body;

    const pricingConfig =
      await pricingService.upsertPricingConfig({
        counsellorId,
        paymentEnabled,
        individualPrice,
      });

    return res.status(200).json({
      success: true,
      message: 'Pricing configuration saved successfully',
      data: pricingConfig,
    });
  } catch (error) {
    next(error);
  }
};

const togglePaymentStatus = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;
    const { paymentEnabled } = req.body;

    const pricingConfig =
      await pricingService.togglePaymentEnabled({
        counsellorId,
        paymentEnabled,
      });

    return res.status(200).json({
      success: true,
      message: 'Payment setting updated successfully',
      data: pricingConfig,
    });
  } catch (error) {
    next(error);
  }
};

const updateIndividualPrice = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;
    const { individualPrice } = req.body;

    const pricingConfig =
      await pricingService.updateIndividualPrice({
        counsellorId,
        individualPrice,
      });

    return res.status(200).json({
      success: true,
      message: 'Individual price updated successfully',
      data: pricingConfig,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPricingConfig,
  upsertPricingConfig,
  togglePaymentStatus,
  updateIndividualPrice,
};