/*
  Warnings:

  - A unique constraint covering the columns `[studentId]` on the table `StudentPayment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StudentPayment_studentId_key" ON "StudentPayment"("studentId");
