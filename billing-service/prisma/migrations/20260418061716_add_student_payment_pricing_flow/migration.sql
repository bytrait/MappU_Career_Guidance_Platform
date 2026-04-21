-- CreateEnum
CREATE TYPE "RegistrationPricingType" AS ENUM ('INDIVIDUAL', 'SCHOOL');

-- CreateEnum
CREATE TYPE "StudentPaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED', 'CANCELLED', 'FREE', 'WAIVED');

-- CreateTable
CREATE TABLE "CounsellorPricingConfig" (
    "id" TEXT NOT NULL,
    "counsellorId" TEXT NOT NULL,
    "paymentEnabled" BOOLEAN NOT NULL DEFAULT true,
    "individualPrice" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CounsellorPricingConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolPricing" (
    "id" TEXT NOT NULL,
    "pricingConfigId" TEXT NOT NULL,
    "counsellorId" TEXT NOT NULL,
    "schoolId" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchoolPricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentPayment" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "counsellorId" TEXT NOT NULL,
    "registrationType" "RegistrationPricingType" NOT NULL,
    "schoolId" TEXT,
    "schoolName" TEXT,
    "referenceCode" TEXT,
    "amount" INTEGER NOT NULL,
    "status" "StudentPaymentStatus" NOT NULL DEFAULT 'PENDING',
    "razorpayOrderId" TEXT,
    "razorpayPaymentId" TEXT,
    "razorpaySignature" TEXT,
    "failureReason" TEXT,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentPayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CounsellorPricingConfig_counsellorId_key" ON "CounsellorPricingConfig"("counsellorId");

-- CreateIndex
CREATE INDEX "SchoolPricing_pricingConfigId_idx" ON "SchoolPricing"("pricingConfigId");

-- CreateIndex
CREATE INDEX "SchoolPricing_counsellorId_idx" ON "SchoolPricing"("counsellorId");

-- CreateIndex
CREATE INDEX "SchoolPricing_schoolId_idx" ON "SchoolPricing"("schoolId");

-- CreateIndex
CREATE INDEX "SchoolPricing_isActive_idx" ON "SchoolPricing"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "StudentPayment_razorpayOrderId_key" ON "StudentPayment"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "StudentPayment_studentId_idx" ON "StudentPayment"("studentId");

-- CreateIndex
CREATE INDEX "StudentPayment_counsellorId_idx" ON "StudentPayment"("counsellorId");

-- CreateIndex
CREATE INDEX "StudentPayment_registrationType_idx" ON "StudentPayment"("registrationType");

-- CreateIndex
CREATE INDEX "StudentPayment_status_idx" ON "StudentPayment"("status");

-- CreateIndex
CREATE INDEX "StudentPayment_schoolId_idx" ON "StudentPayment"("schoolId");

-- CreateIndex
CREATE INDEX "StudentPayment_createdAt_idx" ON "StudentPayment"("createdAt");

-- AddForeignKey
ALTER TABLE "SchoolPricing" ADD CONSTRAINT "SchoolPricing_pricingConfigId_fkey" FOREIGN KEY ("pricingConfigId") REFERENCES "CounsellorPricingConfig"("id") ON DELETE CASCADE ON UPDATE CASCADE;
