/*
  Warnings:

  - You are about to drop the column `scheduled_date` on the `BillingJob` table. All the data in the column will be lost.
  - Added the required column `schedule_arn` to the `BillingJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `BillingJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillingJob" DROP COLUMN "scheduled_date",
ADD COLUMN     "schedule_arn" TEXT NOT NULL,
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;
