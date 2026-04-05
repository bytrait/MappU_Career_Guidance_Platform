const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const creditController = require("../controllers/credit.controller");

router.get(
  "/summary",
  authMiddleware,
  roleMiddleware("COUNSELLOR"),
  creditController.getCreditSummary
);
router.get(
  "/history",
  authMiddleware,
  roleMiddleware("COUNSELLOR"),
  creditController.getCreditHistory
);


module.exports = router;
