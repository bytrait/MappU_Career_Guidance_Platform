-- CreateTable
CREATE TABLE "UserAssessmentPreference" (
    "id" TEXT NOT NULL,
    "userId" UUID NOT NULL,
    "preferredLanguage" TEXT NOT NULL,
    "economicStatus" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAssessmentPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAssessmentPreference_userId_key" ON "UserAssessmentPreference"("userId");
