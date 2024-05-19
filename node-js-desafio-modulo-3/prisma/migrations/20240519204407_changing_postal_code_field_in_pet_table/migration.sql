/*
  Warnings:

  - You are about to drop the column `postal_code_location` on the `pets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "postal_code_location",
ADD COLUMN     "postal_code" TEXT NOT NULL DEFAULT '';
