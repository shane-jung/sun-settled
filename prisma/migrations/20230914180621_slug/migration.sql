/*
  Warnings:

  - You are about to drop the column `slug` on the `Garden` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Garden_slug_key";

-- AlterTable
ALTER TABLE "Garden" DROP COLUMN "slug";
