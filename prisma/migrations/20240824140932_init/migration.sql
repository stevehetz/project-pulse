-- CreateTable
CREATE TABLE "Metric" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Metric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEngagement" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "activeUsers" INTEGER NOT NULL,
    "newSignups" INTEGER NOT NULL,
    "DAU" INTEGER NOT NULL,
    "MAU" INTEGER NOT NULL,

    CONSTRAINT "UserEngagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RetentionRate" (
    "id" SERIAL NOT NULL,
    "cohort" TEXT NOT NULL,
    "retention" INTEGER[],
    "userEngagementId" INTEGER NOT NULL,

    CONSTRAINT "RetentionRate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Revenue" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "MRR" DOUBLE PRECISION NOT NULL,
    "ARPU" DOUBLE PRECISION NOT NULL,
    "churnRate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Revenue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectUsage" (
    "id" SERIAL NOT NULL,
    "feature" TEXT NOT NULL,
    "usage" INTEGER NOT NULL,

    CONSTRAINT "ProjectUsage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemPerformance" (
    "id" SERIAL NOT NULL,
    "day" TEXT NOT NULL,
    "uptime" DOUBLE PRECISION NOT NULL,
    "averageTime" INTEGER NOT NULL,
    "maxTime" INTEGER NOT NULL,
    "minTime" INTEGER NOT NULL,
    "apiSuccessRate" DOUBLE PRECISION NOT NULL,
    "error500" DOUBLE PRECISION NOT NULL,
    "error404" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SystemPerformance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CohortAnalysisData" (
    "id" SERIAL NOT NULL,
    "cohort" TEXT NOT NULL,
    "retention" INTEGER[],

    CONSTRAINT "CohortAnalysisData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RetentionRate" ADD CONSTRAINT "RetentionRate_userEngagementId_fkey" FOREIGN KEY ("userEngagementId") REFERENCES "UserEngagement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
