const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const paymentController = require("../controllers/payment.controller");

router.post(
  "/create-order",
  authMiddleware,
  roleMiddleware("COUNSELLOR"),
  paymentController.createOrder
);

router.post(
  "/webhook",
  paymentController.handleWebhook
);

router.get(
  "/status/:orderId",
  authMiddleware,
  roleMiddleware("COUNSELLOR"),
  paymentController.getPaymentStatus
);

router.get(
  "/history",
  authMiddleware,
  roleMiddleware("COUNSELLOR"),
  paymentController.getPaymentHistory
);

module.exports = router;
