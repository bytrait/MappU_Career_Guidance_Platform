// src/controllers/studentPayment.controller.js

const studentPaymentService = require('../services/studentPayment.service');

const getStudentPaymentStatus = async (req, res, next) => {
  try {
    const studentId = req.user.id;

    const paymentStatus =
      await studentPaymentService.getStudentPaymentStatus(studentId);

    return res.status(200).json({
      success: true,
      message: 'Student payment status fetched successfully',
      data: paymentStatus,
    });
  } catch (error) {
    next(error);
  }
};

const createStudentPaymentOrder = async (req, res, next) => {
  try {
    const studentId = req.user.id;

    const order =
      await studentPaymentService.createStudentPaymentOrder(studentId);

    return res.status(200).json({
      success: true,
      message: 'Student payment order created successfully',
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

const verifyStudentPayment = async (req, res, next) => {
  try {
    const studentId = req.user.id;

    const {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = req.body;

    const payment =
      await studentPaymentService.verifyStudentPayment({
        studentId,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      });

    return res.status(200).json({
      success: true,
      message: 'Student payment verified successfully',
      data: payment,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getStudentPaymentStatus,
  createStudentPaymentOrder,
  verifyStudentPayment,
};