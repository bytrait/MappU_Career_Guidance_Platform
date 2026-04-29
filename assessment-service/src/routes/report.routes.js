const express = require('express');
const router = express.Router();

const { generateReportPDF } = require('../controllers/report.controller');

router.post("/pdf", generateReportPDF);

module.exports = router;
