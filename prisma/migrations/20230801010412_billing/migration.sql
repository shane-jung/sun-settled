-- AlterTable
ALTER TABLE "Reading" ADD COLUMN     "production_read_date" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Subscriber" ADD COLUMN     "subscriptionPlanId" TEXT;

-- CreateTable
CREATE TABLE "BillingJob" (
    "id" TEXT NOT NULL,
    "garden_id" TEXT NOT NULL DEFAULT '1',
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "create_time" TIMESTAMP(3) NOT NULL,
    "initial_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillingJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "due_date" TIMESTAMP(3) NOT NULL,
    "send_date" TIMESTAMP(3) NOT NULL,
    "received_date" TIMESTAMP(3),
    "subscriber_id" TEXT NOT NULL DEFAULT '1',
    "status" TEXT NOT NULL DEFAULT 'SCHEDULED',
    "billing_job_id" TEXT NOT NULL DEFAULT '1',
    "timestamp" TIMESTAMP(3) NOT NULL,
    "subscription_plan_id" TEXT,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "interval" INTEGER NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "rate_type" TEXT NOT NULL DEFAULT 'VARIABLE',
    "percent_increase" DECIMAL(65,30) NOT NULL,
    "cycles" INTEGER NOT NULL,

    CONSTRAINT "SubscriptionPlan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subscriber" ADD CONSTRAINT "Subscriber_subscriptionPlanId_fkey" FOREIGN KEY ("subscriptionPlanId") REFERENCES "SubscriptionPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillingJob" ADD CONSTRAINT "BillingJob_garden_id_fkey" FOREIGN KEY ("garden_id") REFERENCES "Garden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_subscription_plan_id_fkey" FOREIGN KEY ("subscription_plan_id") REFERENCES "SubscriptionPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_subscriber_id_fkey" FOREIGN KEY ("subscriber_id") REFERENCES "Subscriber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_billing_job_id_fkey" FOREIGN KEY ("billing_job_id") REFERENCES "BillingJob"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
