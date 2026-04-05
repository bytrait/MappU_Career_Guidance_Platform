/*
  Warnings:

  - Added the required column `pricePerStudent` to the `PaymentOrder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PaymentOrder" ADD COLUMN     "pricePerStudent" INTEGER NOT NULL;
