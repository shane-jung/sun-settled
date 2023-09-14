/*
  Warnings:

  - You are about to drop the column `production_read_date` on the `Reading` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Reading` table. All the data in the column will be lost.
  - You are about to drop the column `paymentPlan` on the `Subscriber` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Reading` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inputDate` to the `Reading` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Reading` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reading" 
  DROP COLUMN "production_read_date",
  ADD COLUMN "inputDate" TIMESTAMP(3) NOT NULL default('1970-01-01 00:00:00'),
  DROP COLUMN "timestamp",
  ADD COLUMN "startDate" TIMESTAMP(3) NOT NULL default('1970-01-01 00:00:00'),
  ADD COLUMN "endDate" TIMESTAMP(3) NOT NULL default('1970-01-01 00:00:00');

-- AlterTable
ALTER TABLE "Subscriber" DROP COLUMN "paymentPlan";
