-- AlterTable
ALTER TABLE "PaymentOrder" ADD COLUMN     "failureReason" TEXT,
ADD COLUMN     "razorpayPaymentId" TEXT;
