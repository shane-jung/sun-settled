/*
  Warnings:

  - You are about to drop the column `capacityDc` on the `Subscriber` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Garden` ADD COLUMN `capacityDc` DECIMAL(65, 30) NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Subscriber` DROP COLUMN `capacityDc`;
