/*
  Warnings:

  - You are about to drop the column `interval` on the `SubscriptionPlan` table. All the data in the column will be lost.
  - Added the required column `billingFrequency` to the `SubscriptionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isProductionDependent` to the `SubscriptionPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isShareDependent` to the `SubscriptionPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubscriptionPlan" DROP COLUMN "interval",
ADD COLUMN     "billingFrequency" TEXT NOT NULL,
ADD COLUMN     "isProductionDependent" BOOLEAN NOT NULL,
ADD COLUMN     "isShareDependent" BOOLEAN NOT NULL;
