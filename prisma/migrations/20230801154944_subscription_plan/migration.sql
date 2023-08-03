/*
  Warnings:

  - You are about to drop the column `cycles` on the `SubscriptionPlan` table. All the data in the column will be lost.
  - You are about to drop the column `percent_increase` on the `SubscriptionPlan` table. All the data in the column will be lost.
  - You are about to drop the column `rate_type` on the `SubscriptionPlan` table. All the data in the column will be lost.
  - Added the required column `rateIncrease` to the `SubscriptionPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubscriptionPlan" DROP COLUMN "cycles",
DROP COLUMN "percent_increase",
DROP COLUMN "rate_type",
ADD COLUMN     "rateIncrease" DECIMAL(65,30) NOT NULL;
