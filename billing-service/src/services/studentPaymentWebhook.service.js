const crypto = require('crypto');
const prisma = require('../utils/prisma.util');

const handleWebhook = async ({ payload, signature }) => {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

  const generatedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(JSON.stringify(payload))
    .digest('hex');

  if (generatedSignature !== signature) {
    throw new Error('Invalid webhook signature');
  }

  await prisma.paymentWebhookLog.create({
    data: {
      eventType: payload.event,
      payload,
    },
  });

  if (payload.event === 'payment.captured') {
    const razorpayOrderId = payload.payload.payment.entity.order_id;
    const razorpayPaymentId = payload.payload.payment.entity.id;

    const existingPayment = await prisma.studentPayment.findUnique({
      where: {
        razorpayOrderId,
      },
    });

    if (!existingPayment) {
      return;
    }

    if (existingPayment.status === 'PAID') {
      return;
    }

    await prisma.studentPayment.update({
      where: {
        razorpayOrderId,
      },
      data: {
        status: 'PAID',
        razorpayPaymentId,
        paidAt: new Date(),
        failureReason: null,
      },
    });
  }

  if (payload.event === 'payment.failed') {
    const razorpayOrderId = payload.payload.payment.entity.order_id;

    const existingPayment = await prisma.studentPayment.findUnique({
      where: {
        razorpayOrderId,
      },
    });

    if (!existingPayment) {
      return;
    }

    await prisma.studentPayment.update({
      where: {
        razorpayOrderId,
      },
      data: {
        status: 'FAILED',
        failureReason:
          payload.payload.payment.entity.error_description ||
          'Payment failed',
      },
    });
  }
};

module.exports = {
  handleWebhook,
};