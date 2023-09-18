/*
  Warnings:

  - You are about to alter the column `capacityDc` on the `Garden` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `value` on the `Reading` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `allocation` on the `Subscriber` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `rate` on the `SubscriptionPlan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `rateIncrease` on the `SubscriptionPlan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Garden" ALTER COLUMN "capacityDc" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Reading" ALTER COLUMN "value" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Subscriber" ALTER COLUMN "allocation" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "SubscriptionPlan" ALTER COLUMN "rate" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "rateIncrease" SET DATA TYPE DOUBLE PRECISION;
