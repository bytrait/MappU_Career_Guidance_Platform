// billing-service/src/controllers/studentPaymentInternal.controller.js

const studentPaymentInternalService = require('../services/studentPaymentInternal.service');

const createStudentPaymentRecord = async (req, res, next) => {
  try {
    const {
      studentId,
      counsellorId,
      registrationType,
      schoolId,
      schoolName,
      referenceCode,
      referenceCodeId,
    } = req.body;

    const payment =
      await studentPaymentInternalService.createStudentPaymentRecord({
        studentId,
        counsellorId,
        registrationType,
        schoolId,
        schoolName,
        referenceCode,
        referenceCodeId,
      });

    return res.status(201).json({
      success: true,
      message: 'Student payment record created successfully',
      data: payment,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStudentPaymentRecord,
};