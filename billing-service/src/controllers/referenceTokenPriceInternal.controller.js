const referenceTokenPriceService = require('../services/referenceTokenPrice.service');

const upsertReferenceTokenPrice = async (req, res, next) => {
  try {
    const {
      tokenId,
      code,
      type,
      targetId,
      counsellorId,
      price,
      currency,
      startDate,
      expiryDate,
      label,
    } = req.body;

    const data = await referenceTokenPriceService.upsertReferenceTokenPrice({
      tokenId,
      code,
      type,
      targetId,
      counsellorId,
      price,
      currency,
      startDate,
      expiryDate,
      label,
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const deactivateReferenceTokenPrice = async (req, res, next) => {
  try {
    const { tokenId } = req.body;

    const data =
      await referenceTokenPriceService.deactivateReferenceTokenPrice({
        tokenId,
      });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getReferenceTokenPriceByCode = async (req, res, next) => {
  try {
    const { code } = req.query;

    if (!code) {
      const error = new Error('code query parameter is required');
      error.status = 400;
      throw error;
    }

    const data =
      await referenceTokenPriceService.getPriceByCodeForDisplay(code);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  upsertReferenceTokenPrice,
  deactivateReferenceTokenPrice,
  getReferenceTokenPriceByCode,
};
