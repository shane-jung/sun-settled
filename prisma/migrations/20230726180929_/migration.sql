/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Garden` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Garden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Garden` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Garden_slug_key` ON `Garden`(`slug`);
