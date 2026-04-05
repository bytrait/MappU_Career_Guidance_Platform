const billingService = require("../services/billing.service");

exports.consumeCredit = async (req, res, next) => {
  try {
    const { counsellorId } = req.body;

    await billingService.consumeCredit({
      counsellorId,
      requestId: req.requestId
    });

    return res.status(200).json({
      success: true
    });

  } catch (error) {
    next(error);
  }
};

exports.refundCredit = async (req, res, next) => {
  try {
    const { counsellorId } = req.body;

    await billingService.refundCredit({
      counsellorId,
      requestId: req.requestId
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    next(error);
  }
};
