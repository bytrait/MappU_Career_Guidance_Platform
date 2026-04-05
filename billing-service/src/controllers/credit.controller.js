const creditService = require("../services/credit.service");

exports.getCreditSummary = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const summary = await creditService.getCreditSummary({
      counsellorId,
      requestId: req.requestId
    });

    return res.status(200).json({
      success: true,
      data: summary
    });

  } catch (error) {
    next(error);
  }
};

exports.getCreditHistory = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const {
      page = 1,
      limit = 20,
      type,
      from,
      to
    } = req.query;

    const result = await creditService.getCreditHistory({
      counsellorId,
      page: Number(page),
      limit: Number(limit),
      type,
      from,
      to,
      requestId: req.requestId
    });

    return res.status(200).json({
      success: true,
      ...result
    });

  } catch (error) {
    next(error);
  }
};
