/*
  Warnings:

  - You are about to drop the column `self_suport` on the `pets` table. All the data in the column will be lost.
  - Added the required column `self_support` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "self_suport",
ADD COLUMN     "self_support" "PetSupport" NOT NULL;
