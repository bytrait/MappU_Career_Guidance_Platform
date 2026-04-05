const prisma = require("../utils/prisma.util");
const razorpay = require("../config/razorpay.config");
const logger = require("../utils/logger.util");
const crypto = require("crypto");


const PRICE_PER_STUDENT = Number(process.env.PRICE_PER_STUDENT);
const MIN_PURCHASE_LIMIT = Number(process.env.MIN_PURCHASE_LIMIT);

exports.createOrder = async ({ counsellorId, studentCount, requestId }) => {

  if (!studentCount || !Number.isInteger(studentCount)) {
    throw new Error("Invalid student count");
  }

  if (studentCount < MIN_PURCHASE_LIMIT) {
    throw new Error(
      `Minimum purchase limit is ${MIN_PURCHASE_LIMIT}`
    );
  }

  // Cancel stale PENDING orders (older than 30 minutes)
  await prisma.paymentOrder.updateMany({
    where: {
      counsellorId,
      status: "PENDING",
      createdAt: {
        lt: new Date(Date.now() - 30 * 60 * 1000)
      }
    },
    data: {
      status: "CANCELLED"
    }
  });

  // Prevent duplicate active PENDING order
  const existingPending = await prisma.paymentOrder.findFirst({
    where: {
      counsellorId,
      status: "PENDING"
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  if (existingPending) {
    logger.info("Returning existing pending order", {
      requestId,
      counsellorId,
      orderId: existingPending.razorpayOrderId
    });

    return {
      orderId: existingPending.razorpayOrderId,
      amount: existingPending.totalAmount * 100,
      key: process.env.RAZORPAY_KEY_ID
    };
  }

  const totalAmount = studentCount * PRICE_PER_STUDENT;
  const razorpayAmount = totalAmount * 100;

  const razorpayOrder = await razorpay.orders.create({
    amount: razorpayAmount,
    currency: "INR",
    receipt: `receipt_${Date.now()}`
  });

  await prisma.paymentOrder.create({
    data: {
      counsellorId,
      razorpayOrderId: razorpayOrder.id,
      studentCount,
      pricePerStudent: PRICE_PER_STUDENT,
      totalAmount,
      status: "PENDING"
    }
  });

  return {
    orderId: razorpayOrder.id,
    amount: razorpayAmount,
    key: process.env.RAZORPAY_KEY_ID
  };
};



exports.handleWebhook = async (req) => {

  const signature = req.headers["x-razorpay-signature"];
  const rawBody = req.body;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (expectedSignature !== signature) {
    throw new Error("Invalid Razorpay webhook signature");
  }

  const event = JSON.parse(rawBody.toString());

  await prisma.paymentWebhookLog.create({
    data: {
      eventType: event.event,
      payload: event
    }
  });

  if (!event.payload?.payment?.entity) {
    return;
  }

  const payment = event.payload.payment.entity;
  const razorpayOrderId = payment.order_id;

  const paymentOrder = await prisma.paymentOrder.findUnique({
    where: { razorpayOrderId }
  });

  if (!paymentOrder) {
    logger.warn("Webhook received for unknown order", {
      razorpayOrderId
    });
    return;
  }

  // 🚨 Strict amount validation
  const expectedAmountInPaise = paymentOrder.totalAmount * 100;

  if (payment.amount !== expectedAmountInPaise) {
    logger.error("Payment amount mismatch", {
      razorpayOrderId,
      expected: expectedAmountInPaise,
      received: payment.amount
    });
    throw new Error("Payment amount mismatch");
  }

  if (payment.currency !== "INR") {
    logger.error("Currency mismatch", {
      razorpayOrderId,
      currency: payment.currency
    });
    throw new Error("Invalid payment currency");
  }

  // ==============================
  // PAYMENT SUCCESS
  // ==============================
  if (event.event === "payment.captured") {

    if (paymentOrder.status === "PAID") {
      logger.info("Duplicate payment.captured webhook ignored", {
        razorpayOrderId
      });
      return;
    }

    if (paymentOrder.status === "FAILED") {
      logger.warn("Captured received after FAILED state", {
        razorpayOrderId
      });
    }

    await prisma.$transaction(async (tx) => {

      await tx.paymentOrder.update({
        where: { id: paymentOrder.id },
        data: {
          status: "PAID",
          razorpayPaymentId: payment.id
        }
      });

      const existingCredit = await tx.counsellorCredit.findUnique({
        where: { counsellorId: paymentOrder.counsellorId }
      });

      if (existingCredit) {
        await tx.counsellorCredit.update({
          where: { counsellorId: paymentOrder.counsellorId },
          data: {
            totalCredits: {
              increment: paymentOrder.studentCount
            }
          }
        });
      } else {
        await tx.counsellorCredit.create({
          data: {
            counsellorId: paymentOrder.counsellorId,
            totalCredits: paymentOrder.studentCount,
            usedCredits: 0
          }
        });
      }

      await tx.creditTransaction.create({
        data: {
          counsellorId: paymentOrder.counsellorId,
          type: "PURCHASE",
          amount: paymentOrder.studentCount,
          referenceId: paymentOrder.id,
          description: "Credits purchased via Razorpay"
        }
      });
    });

    return;
  }

  // ==============================
  // PAYMENT FAILED
  // ==============================
  if (event.event === "payment.failed") {

    if (paymentOrder.status === "FAILED") {
      return;
    }

    await prisma.paymentOrder.update({
      where: { id: paymentOrder.id },
      data: {
        status: "FAILED",
        razorpayPaymentId: payment.id,
        failureReason: payment.error_description || "Payment failed"
      }
    });

    return;
  }
};


exports.getPaymentStatus = async ({
  orderId,
  counsellorId
}) => {

  const order = await prisma.paymentOrder.findFirst({
    where: {
      razorpayOrderId: orderId,
      counsellorId
    },
    select: {
      razorpayOrderId: true,
      status: true,
      studentCount: true,
      pricePerStudent: true,
      totalAmount: true,
      createdAt: true,
      razorpayPaymentId: true
    }
  });

  if (!order) {
    throw new Error("Payment order not found");
  }

  return order;
};

exports.getPaymentHistory = async ({
  counsellorId,
  page = 1,
  limit = 20
}) => {

  const skip = (page - 1) * limit;

  const [orders, total] = await Promise.all([
    prisma.paymentOrder.findMany({
      where: { counsellorId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit
    }),
    prisma.paymentOrder.count({
      where: { counsellorId }
    })
  ]);

  return {
    data: orders,
    total,
    page,
    limit
  };
};

