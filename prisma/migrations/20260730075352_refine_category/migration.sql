/*
  Warnings:

  - You are about to drop the column `createdByUserId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_createdByUserId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "createdByUserId",
ADD COLUMN     "createdBy" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
