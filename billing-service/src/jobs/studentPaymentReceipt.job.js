const cron = require('node-cron');
const axios = require('axios');
const prisma = require('../utils/prisma.util');

const processPendingPaymentReceipts = async () => {
  try {
    const pendingReceipts = await prisma.studentPayment.findMany({
      where: {
        status: 'PAID',
        receiptSent: false,
        receiptNumber: {
          not: null,
        },
      },
      orderBy: {
        paidAt: 'asc',
      },
      take: 20,
    });

    if (!pendingReceipts.length) {
      return;
    }

    for (const payment of pendingReceipts) {
      try {
        const userResponse = await axios.get(
          `${process.env.AUTH_URL}/internal/users/${payment.studentId}/basic-details`,
          {
            headers: {
              'x-internal-api-key': process.env.INTERNAL_SERVICE_SECRET,
            },
          }
        );

        const user = userResponse.data;

        await axios.post(
          `${process.env.AUTH_URL}/internal/emails/payment-receipt`,
          {
            studentId: payment.studentId,
            fullName: user.fullName,
            email: user.email,
            receiptNumber: payment.receiptNumber,
            amount: payment.amount,
            currency: payment.currency,
            paymentDate: payment.paidAt,
            razorpayOrderId: payment.razorpayOrderId,
            razorpayPaymentId: payment.razorpayPaymentId,
            registrationType: payment.registrationType,
            schoolName: payment.schoolName,
          },
          {
            headers: {
              'x-internal-api-key': process.env.INTERNAL_SERVICE_SECRET,
            },
          }
        );

        await prisma.studentPayment.update({
          where: {
            id: payment.id,
          },
          data: {
            receiptSent: true,
            receiptSentAt: new Date(),
          },
        });

        console.log(
          `[PAYMENT_RECEIPT_JOB] Receipt sent successfully for payment ${payment.id}`
        );
      } catch (error) {
        console.error(
          `[PAYMENT_RECEIPT_JOB] Failed for payment ${payment.id}`,
          error?.response?.data || error.message
        );
      }
    }
  } catch (error) {
    console.error(
      '[PAYMENT_RECEIPT_JOB] Unexpected job error',
      error.message
    );
  }
};

const startStudentPaymentReceiptJob = () => {
  cron.schedule('*/2 * * * *', async () => {
    console.log('[PAYMENT_RECEIPT_JOB] Running payment receipt job');

    await processPendingPaymentReceipts();
  });
};

module.exports = {
  startStudentPaymentReceiptJob,
};