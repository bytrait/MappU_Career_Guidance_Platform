const express = require("express");

const creditRoutes = require("./credit.routes");
const paymentRoutes = require("./payment.routes");
const internalRoutes = require("./internal.routes");

const router = express.Router();

// Special raw body for webhook (billing-specific)
router.use(
  "/payments/webhook",
  express.raw({ type: "application/json" })
);

router.use("/credits", creditRoutes);
router.use("/payments", paymentRoutes);
router.use("/internal", internalRoutes);

module.exports = router;