const paymentService = require("../services/payment.service");

exports.createOrder = async (req, res, next) => {
  try {
    const { studentCount } = req.body;
    const counsellorId = req.user.id;

    const result = await paymentService.createOrder({
      counsellorId,
      studentCount,
      requestId: req.requestId
    });

    res.status(200).json({
      success: true,
      ...result
    });

  } catch (error) {
    next(error);
  }
};

exports.handleWebhook = async (req, res, next) => {
  try {
    await paymentService.handleWebhook(req);

    res.status(200).json({ received: true });

  } catch (error) {
    next(error);
  }
};

exports.getPaymentStatus = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const counsellorId = req.user.id;

    const result = await paymentService.getPaymentStatus({
      orderId,
      counsellorId,
      requestId: req.requestId
    });

    return res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    next(error);
  }
};

exports.getPaymentHistory = async (req, res, next) => {
  try {
    const counsellorId = req.user.id;

    const {
      page = 1,
      limit = 20,
      from,
      to
    } = req.query;

    const result = await paymentService.getPaymentHistory({
      counsellorId,
      page: Number(page),
      limit: Number(limit),
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