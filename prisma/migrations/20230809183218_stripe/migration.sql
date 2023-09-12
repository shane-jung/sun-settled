/*
  Warnings:

  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `BillingJob` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_billingJobId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_subscriberId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_subscription_plan_id_fkey";

-- AlterTable
ALTER TABLE "BillingJob" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subscriber" ADD COLUMN     "stripeCustomerId" TEXT;

-- DropTable
DROP TABLE "Invoice";
