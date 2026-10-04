const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const reportStorage = require("../services/reportStorage.service");
const logger = require("../utils/logger.util");

function getExecutablePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH && fs.existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }
  const paths = [
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/snap/bin/chromium',
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  return undefined;
}

async function renderHtmlToPdfBuffer(html) {
  const executablePath = getExecutablePath();
  const browser = await puppeteer.launch({
    headless: "new",
    ...(executablePath ? { executablePath } : {}),
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.emulateMediaType("print");

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: "0px",
      bottom: "0px",
      left: "0px",
      right: "0px",
    },
  });

  await browser.close();
  return pdfBuffer;
}

const generateReportPDF = async (req, res) => {
  try {
    const { html, studentName, studentId, language = "en", tenantId, counsellorId } = req.body;

    if (!html) {
      return res.status(400).json({ message: "HTML is required" });
    }

    const pdfBuffer = await renderHtmlToPdfBuffer(html);

    // If studentId provided, also persist to storage
    if (studentId) {
      await reportStorage.saveReportPdf({
        userId: studentId,
        tenantId,
        counsellorId,
        language,
        pdfBuffer,
        studentName,
      }).catch(err => {
        logger.error(`Failed to auto-save PDF for studentId=${studentId}: ${err.message}`);
      });
    }

    const fileName = `${studentName || "Report"}_Career_Report_${Date.now()}.pdf`;

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
    });

    return res.send(pdfBuffer);
  } catch (error) {
    console.error("PDF generation error:", error);
    return res.status(500).json({ message: "PDF generation failed" });
  }
};

/**
 * Get stored student PDF for preview or download
 */
const getStudentReportPdf = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const { language = "en", download } = req.query;

    const record = await reportStorage.getReportPdfRecord({
      userId: studentId,
      language,
    });

    if (!record) {
      return res.status(404).json({
        success: false,
        message: "PDF report has not been generated for this student yet.",
      });
    }

    const disposition = download === "true" || download === "1" ? "attachment" : "inline";

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `${disposition}; filename="${record.fileName}"`,
      "Content-Length": record.fileSize,
      "Cache-Control": "public, max-age=3600",
    });

    const readStream = fs.createReadStream(record.absolutePath);
    return readStream.pipe(res);
  } catch (err) {
    logger.error(`Error streaming student PDF report: ${err.message}`);
    next(err);
  }
};

/**
 * Get student report status and metadata
 */
const getStudentReportStatus = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const { language = "en" } = req.query;

    const record = await reportStorage.getReportPdfRecord({
      userId: studentId,
      language,
    });

    if (!record) {
      return res.status(200).json({
        success: true,
        data: { exists: false },
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        exists: true,
        fileName: record.fileName,
        fileSize: record.fileSize,
        generatedAt: record.generatedAt,
        status: record.status,
      },
    });
  } catch (err) {
    logger.error(`Error getting student report status: ${err.message}`);
    next(err);
  }
};

/**
 * Generate and store PDF report for a student
 */
const saveStudentReportPdf = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const { html, studentName, language = "en", tenantId, counsellorId } = req.body;

    if (!html) {
      return res.status(400).json({ success: false, message: "HTML content is required" });
    }

    const pdfBuffer = await renderHtmlToPdfBuffer(html);

    const saved = await reportStorage.saveReportPdf({
      userId: studentId,
      tenantId: tenantId || "bytrait",
      counsellorId: counsellorId || req.user?.id,
      language,
      pdfBuffer,
      studentName: studentName || "Student",
    });

    return res.status(200).json({
      success: true,
      message: "PDF report generated and stored successfully",
      data: {
        fileName: saved.fileName,
        fileSize: saved.fileSize,
        generatedAt: saved.generatedAt,
      },
    });
  } catch (err) {
    logger.error(`Error saving student report PDF: ${err.message}`);
    next(err);
  }
};

/**
 * Delete stored student PDF cache
 */
const deleteStudentReportPdf = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const { language } = req.query;

    await reportStorage.deleteReportPdfRecord({
      userId: studentId,
      language,
    });

    return res.status(200).json({
      success: true,
      message: "Stored PDF cache cleared successfully",
    });
  } catch (err) {
    logger.error(`Error deleting student report PDF: ${err.message}`);
    next(err);
  }
};

module.exports = {
  generateReportPDF,
  downloadReportPdf: generateReportPDF,
  downloadCounsellorStudentReportPdf: generateReportPDF,
  getStudentReportPdf,
  getStudentReportStatus,
  saveStudentReportPdf,
  deleteStudentReportPdf,
};