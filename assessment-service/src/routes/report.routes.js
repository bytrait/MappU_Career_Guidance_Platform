const express = require('express');
const router = express.Router();
const verifyAuthToken = require('../middlewares/auth.middleware');

const {
  generateReportPDF,
  getStudentReportPdf,
  getStudentReportStatus,
  saveStudentReportPdf,
  deleteStudentReportPdf,
} = require('../controllers/report.controller');

// Direct PDF generation (binary response)
router.post("/pdf", generateReportPDF);

// Student PDF storage & preview endpoints
router.get("/student/:studentId/pdf", verifyAuthToken, getStudentReportPdf);
router.get("/student/:studentId/status", verifyAuthToken, getStudentReportStatus);
router.post("/student/:studentId/save", verifyAuthToken, saveStudentReportPdf);
router.delete("/student/:studentId/pdf", verifyAuthToken, deleteStudentReportPdf);

module.exports = router;

