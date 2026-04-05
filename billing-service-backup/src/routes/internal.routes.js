const express = require("express");
const router = express.Router();

const internalAuth = require("../middlewares/internalAuth.middleware");
const billingController = require("../controllers/billing.controller");
const creditService = require("../services/credit.service");


router.post(
  "/consume-credit",
  internalAuth,
  billingController.consumeCredit
);
router.post(
  "/refund-credit",
  internalAuth,
  billingController.refundCredit
);

// routes/internal.route.js

router.post("/grant-signup-credits", async (req, res) => {

  const { counsellorId, requestId } = req.body;

  await creditService.grantSignupCredits({
    counsellorId,
    requestId
  });

  res.json({ success: true });
});

module.exports = router;
