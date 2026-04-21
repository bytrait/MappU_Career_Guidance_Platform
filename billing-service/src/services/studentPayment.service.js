const crypto = require('crypto');
const prisma = require('../utils/prisma.util');
const razorpay = require('../config/razorpay.config');

const generateReceiptNumber = (paymentId) => {
  const year = new Date().getFullYear();
  const shortId = paymentId.replace(/-/g, '').slice(-6).toUpperCase();

  return `MAPU-${year}-${shortId}`;
};

const getStudentPaymentStatus = async (studentId) => {
  const payment = await prisma.studentPayment.findUnique({
    where: {
      studentId,
    },
    select: {
      id: true,
      studentId: true,
      counsellorId: true,
      registrationType: true,
      schoolId: true,
      schoolName: true,
      amount: true,
      currency: true,
      status: true,
      createdAt: true,
      paidAt: true,
      razorpayOrderId: true,
      razorpayPaymentId: true,
      receiptNumber: true,
      receiptSent: true,
      receiptSentAt: true,
    },
  });

  // Counsellor-created students may not have any payment record
  // In that case return FREE instead of throwing an error
  if (!payment) {
    return {
      studentId,
      amount: 0,
      currency: 'INR',
      status: 'FREE',
      paidAt: null,
      razorpayOrderId: null,
      razorpayPaymentId: null,
      receiptNumber: null,
      receiptSent: false,
      receiptSentAt: null,
      isPaymentRequired: false,
    };
  }

  return {
    ...payment,
    isPaymentRequired: payment.status !== 'FREE',
  };
};

const createStudentPaymentOrder = async (studentId) => {
  const payment = await prisma.studentPayment.findUnique({
    where: {
      studentId,
    },
  });

  // No payment row means this student does not require payment
  if (!payment) {
    return {
      amount: 0,
      currency: 'INR',
      status: 'FREE',
      isPaymentRequired: false,
      message: 'No payment required for this student',
    };
  }

  if (payment.status === 'PAID') {
    throw new Error('Payment already completed');
  }

  if (payment.status === 'FREE') {
    return {
      amount: 0,
      currency: 'INR',
      status: 'FREE',
      isPaymentRequired: false,
      message: 'No payment required for this student',
    };
  }

  const receiptId = `stu_${payment.studentId.slice(0, 20)}`;

  const razorpayOrder = await razorpay.orders.create({
    amount: payment.amount * 100,
    currency: 'INR',
    receipt: receiptId,
    notes: {
      studentId: payment.studentId,
      counsellorId: payment.counsellorId,
      registrationType: payment.registrationType,
    },
  });

  await prisma.studentPayment.update({
    where: {
      studentId,
    },
    data: {
      razorpayOrderId: razorpayOrder.id,
      status: 'PENDING',
      failureReason: null,
    },
  });

  return {
    amount: payment.amount,
    razorpayOrderId: razorpayOrder.id,
    currency: 'INR',
    key: process.env.RAZORPAY_KEY_ID,
    isPaymentRequired: true,
  };
};

const verifyStudentPayment = async ({
  studentId,
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  const payment = await prisma.studentPayment.findUnique({
    where: {
      studentId,
    },
  });

  if (!payment) {
    throw new Error('Student payment record not found');
  }

  if (payment.razorpayOrderId !== razorpayOrderId) {
    throw new Error('Invalid order id');
  }

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest('hex');

  if (generatedSignature !== razorpaySignature) {
    await prisma.studentPayment.update({
      where: {
        studentId,
      },
      data: {
        status: 'FAILED',
        failureReason: 'Invalid payment signature',
      },
    });

    throw new Error('Payment signature verification failed');
  }

  const receiptNumber = generateReceiptNumber(payment.id);

  const updatedPayment = await prisma.studentPayment.update({
    where: {
      studentId,
    },
    data: {
      status: 'PAID',
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
      paidAt: new Date(),
      failureReason: null,
      receiptNumber,
      receiptSent: false,
      receiptSentAt: null,
      currency: 'INR',
    },
  });

  return updatedPayment;
};

module.exports = {
  getStudentPaymentStatus,
  createStudentPaymentOrder,
  verifyStudentPayment,
};