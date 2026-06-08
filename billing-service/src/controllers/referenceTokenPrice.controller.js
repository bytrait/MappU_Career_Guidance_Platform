const referenceTokenPriceService = require('../services/referenceTokenPrice.service');

const resolveCounsellorId = (req) => {
  if (req.authSource === 'internal') {
    return (
      req.headers['x-counsellor-id'] ||
      req.body?.counsellorId ||
      null
    );
  }

  return req.user?.id || null;
};

const getBatchPrices = async (req, res, next) => {
  try {
    const counsellorId = resolveCounsellorId(req);

    if (!counsellorId) {
      const error = new Error(
        'counsellorId is required (JWT user or x-counsellor-id for internal calls)'
      );
      error.status = 400;
      throw error;
    }

    const tokenIds =
      req.method === 'GET'
        ? req.query.tokenIds
        : req.body?.tokenIds;

    const data = await referenceTokenPriceService.getBatchPricesByTokenIds({
      tokenIds,
      counsellorId,
    });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBatchPrices,
};
