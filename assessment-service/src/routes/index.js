const express = require("express");
const path = require("path");

const assessmentRoutes = require("./assessment.routes");
const userAssessmentProgressRoutes = require("./userAssessmentProgress.route");
const preferenceRoutes = require("./preference.routes");

const router = express.Router();

// ===== Static Assets (service-level concern) =====
router.use(
  "/static/src/assets",
  express.static(path.join(__dirname, "../assets"), {
    fallthrough: false,
    extensions: ["png", "jpg", "jpeg", "gif", "webp", "svg"],
  })
);

// ===== Service Routes =====
router.use("/", assessmentRoutes);
router.use("/assessment-progress", userAssessmentProgressRoutes);
router.use("/preference", preferenceRoutes);

module.exports = router;