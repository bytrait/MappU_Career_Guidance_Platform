/*
  Warnings:

  - A unique constraint covering the columns `[receiptNumber]` on the table `StudentPayment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "StudentPayment" ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'INR',
ADD COLUMN     "receiptNumber" TEXT,
ADD COLUMN     "receiptSent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "receiptSentAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "StudentPayment_receiptNumber_key" ON "StudentPayment"("receiptNumber");

-- CreateIndex
CREATE INDEX "StudentPayment_receiptNumber_idx" ON "StudentPayment"("receiptNumber");

-- CreateIndex
CREATE INDEX "StudentPayment_receiptSent_idx" ON "StudentPayment"("receiptSent");
