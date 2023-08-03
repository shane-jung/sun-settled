/*
  Warnings:

  - You are about to drop the column `status` on the `BillingJob` table. All the data in the column will be lost.
  - You are about to drop the column `billing_job_id` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `subscriber_id` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `cycles` to the `BillingJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subscription_plan_id` to the `BillingJob` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_billing_job_id_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_subscriber_id_fkey";

-- AlterTable
ALTER TABLE "BillingJob" DROP COLUMN "status",
ADD COLUMN     "cycles" INTEGER NOT NULL,
ADD COLUMN     "subscription_plan_id" TEXT NOT NULL,
ALTER COLUMN "garden_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "billing_job_id",
DROP COLUMN "subscriber_id",
ADD COLUMN     "billingJobId" TEXT,
ADD COLUMN     "subscriberId" TEXT;

-- AlterTable
ALTER TABLE "Reading" ALTER COLUMN "gardenId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "BillingJob" ADD CONSTRAINT "BillingJob_subscription_plan_id_fkey" FOREIGN KEY ("subscription_plan_id") REFERENCES "SubscriptionPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_billingJobId_fkey" FOREIGN KEY ("billingJobId") REFERENCES "BillingJob"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "Subscriber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
