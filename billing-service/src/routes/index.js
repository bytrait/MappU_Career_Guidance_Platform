const express = require("express");

const creditRoutes = require("./credit.routes");
const paymentRoutes = require("./payment.routes");
const internalRoutes = require("./internal.routes");
const pricingRoutes = require('./pricing.routes'); 
const schoolPricingRoutes = require('./schoolPricing.routes');
const studentPaymentRoutes = require('./studentPayment.routes');
const studentPaymentInternalRoutes = require('./studentInternal.routes');
const studentPaymentWebhookRoutes = require('./studentPaymentWebhook.routes');

const router = express.Router();

// Special raw body for webhook (billing-specific)
router.use(
  "/payments/webhook",
  express.raw({ type: "application/json" })
);

router.use("/credits", creditRoutes);
router.use("/payments", paymentRoutes);
router.use("/internal", internalRoutes);
router.use('/pricing', pricingRoutes);
router.use('/school-pricing', schoolPricingRoutes);
router.use('/student-payment', studentPaymentRoutes);
router.use('/student-payment-internal', studentPaymentInternalRoutes);
router.use('/student-payment-webhook', studentPaymentWebhookRoutes);

module.exports = router;