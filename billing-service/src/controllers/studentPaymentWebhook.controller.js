const studentPaymentWebhookService = require('../services/studentPaymentWebhook.service');

const handleRazorpayWebhook = async (req, res, next) => {
  try {
    const signature = req.headers['x-razorpay-signature'];

    await studentPaymentWebhookService.handleWebhook({
      payload: req.body,
      signature,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleRazorpayWebhook,
};