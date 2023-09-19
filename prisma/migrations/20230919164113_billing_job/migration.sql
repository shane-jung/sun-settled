/*
  Warnings:

  - You are about to drop the column `create_time` on the `BillingJob` table. All the data in the column will be lost.
  - You are about to drop the column `cycles` on the `BillingJob` table. All the data in the column will be lost.
  - You are about to drop the column `initial_time` on the `BillingJob` table. All the data in the column will be lost.
  - Added the required column `end_date` to the `BillingJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduled_date` to the `BillingJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BillingJob" DROP COLUMN "create_time",
DROP COLUMN "cycles",
DROP COLUMN "initial_time",
ADD COLUMN     "end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "scheduled_date" TIMESTAMP(3) NOT NULL;
