const fs = require('fs');
const path = require('path');
const prisma = require('../utils/prisma.util');
const logger = require('../utils/logger.util');

const BASE_STORAGE_DIR = process.env.REPORT_STORAGE_PATH 
  ? path.resolve(process.env.REPORT_STORAGE_PATH)
  : path.join(__dirname, '../../storage/reports');

function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Save generated PDF buffer to storage and database
 */
async function saveReportPdf({
  userId,
  tenantId = 'bytrait',
  counsellorId = null,
  language = 'en',
  pdfBuffer,
  studentName = 'Student',
}) {
  try {
    const tenantDir = path.join(BASE_STORAGE_DIR, tenantId || 'bytrait');
    ensureDirExists(tenantDir);

    const safeStudentName = (studentName || 'Student').replace(/[^a-zA-Z0-9_-]/g, '_');
    const fileName = `${safeStudentName}_Career_Report_${language}.pdf`;
    const relativePath = path.join(tenantId || 'bytrait', `${userId}_${language}.pdf`);
    const absolutePath = path.join(BASE_STORAGE_DIR, relativePath);

    fs.writeFileSync(absolutePath, pdfBuffer);

    const fileSize = pdfBuffer.length || fs.statSync(absolutePath).size;

    logger.info(`[ReportStorageService] Saved PDF for userId=${userId}, language=${language} at ${absolutePath} (${fileSize} bytes)`);

    const record = await prisma.generatedReportPdf.upsert({
      where: {
        userId_language: {
          userId,
          language,
        },
      },
      create: {
        userId,
        tenantId: tenantId || null,
        counsellorId: counsellorId || null,
        language,
        filePath: relativePath,
        fileName,
        fileSize,
        status: 'COMPLETED',
      },
      update: {
        tenantId: tenantId || null,
        counsellorId: counsellorId || null,
        filePath: relativePath,
        fileName,
        fileSize,
        status: 'COMPLETED',
        updatedAt: new Date(),
      },
    });

    return { ...record, absolutePath };
  } catch (err) {
    logger.error(`[ReportStorageService] Error saving report PDF: ${err.message}`, { stack: err.stack });
    throw err;
  }
}

/**
 * Get stored report PDF metadata and absolute file path
 */
async function getReportPdfRecord({ userId, language = 'en' }) {
  try {
    const record = await prisma.generatedReportPdf.findUnique({
      where: {
        userId_language: {
          userId,
          language,
        },
      },
    });

    if (!record) return null;

    const absolutePath = path.join(BASE_STORAGE_DIR, record.filePath);
    if (!fs.existsSync(absolutePath)) {
      logger.warn(`[ReportStorageService] Record found for userId=${userId} but file missing on disk: ${absolutePath}`);
      return null;
    }

    return { ...record, absolutePath };
  } catch (err) {
    logger.error(`[ReportStorageService] Error fetching report PDF record: ${err.message}`);
    throw err;
  }
}

/**
 * Delete stored PDF record and remove physical file
 */
async function deleteReportPdfRecord({ userId, language = null }) {
  try {
    const where = language ? { userId, language } : { userId };
    const records = await prisma.generatedReportPdf.findMany({ where });

    for (const rec of records) {
      const absPath = path.join(BASE_STORAGE_DIR, rec.filePath);
      if (fs.existsSync(absPath)) {
        try {
          fs.unlinkSync(absPath);
        } catch (e) {
          logger.warn(`[ReportStorageService] Could not unlink ${absPath}: ${e.message}`);
        }
      }
    }

    await prisma.generatedReportPdf.deleteMany({ where });
    return { success: true };
  } catch (err) {
    logger.error(`[ReportStorageService] Error deleting report PDF: ${err.message}`);
    throw err;
  }
}

module.exports = {
  saveReportPdf,
  getReportPdfRecord,
  deleteReportPdfRecord,
  BASE_STORAGE_DIR,
};
