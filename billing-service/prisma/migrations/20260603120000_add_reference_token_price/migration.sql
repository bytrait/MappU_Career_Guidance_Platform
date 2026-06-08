-- CreateTable
CREATE TABLE "ReferenceTokenPrice" (
    "id" TEXT NOT NULL,
    "tokenId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "counsellorId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'INR',
    "label" TEXT,
    "startDate" TIMESTAMP(3),
    "expiryDate" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReferenceTokenPrice_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "StudentPayment" ADD COLUMN "referenceCodeId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ReferenceTokenPrice_tokenId_key" ON "ReferenceTokenPrice"("tokenId");

-- CreateIndex
CREATE UNIQUE INDEX "ReferenceTokenPrice_code_key" ON "ReferenceTokenPrice"("code");

-- CreateIndex
CREATE INDEX "ReferenceTokenPrice_counsellorId_idx" ON "ReferenceTokenPrice"("counsellorId");

-- CreateIndex
CREATE INDEX "ReferenceTokenPrice_code_idx" ON "ReferenceTokenPrice"("code");

-- CreateIndex
CREATE INDEX "ReferenceTokenPrice_isActive_idx" ON "ReferenceTokenPrice"("isActive");

-- CreateIndex
CREATE INDEX "StudentPayment_referenceCode_idx" ON "StudentPayment"("referenceCode");

-- CreateIndex
CREATE INDEX "StudentPayment_referenceCodeId_idx" ON "StudentPayment"("referenceCodeId");
