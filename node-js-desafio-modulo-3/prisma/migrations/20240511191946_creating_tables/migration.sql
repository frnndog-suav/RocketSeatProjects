/*
  Warnings:

  - Added the required column `password_hash` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'ORGANIZATION_OWNER');

-- CreateEnum
CREATE TYPE "PetAge" AS ENUM ('NEWBORN', 'BABY', 'MIDDLE_AGE', 'ADULT', 'ELDER');

-- CreateEnum
CREATE TYPE "PetSize" AS ENUM ('TINY', 'SMALL', 'MEDIUM', 'BIG', 'GIGANTIC');

-- CreateEnum
CREATE TYPE "PetEnergy" AS ENUM ('LOW', 'MODERATE', 'MEDIUM', 'HIGH', 'EXTREME');

-- CreateEnum
CREATE TYPE "PetEnvironment" AS ENUM ('INDOOR', 'ALL_SPACES', 'OUTDOOR');

-- CreateEnum
CREATE TYPE "PetSupport" AS ENUM ('NONE', 'LOW_SUPPORT', 'MODERATE_SUPPORT', 'HIGH_SUPPORT', 'DEPENDENT');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password_hash" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "owner_name" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "street_name" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pets" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "age" "PetAge" NOT NULL,
    "size" "PetSize" NOT NULL,
    "energy" "PetEnergy" NOT NULL,
    "self_suport" "PetSupport" NOT NULL,
    "environment" "PetEnvironment" NOT NULL,
    "image" TEXT NOT NULL,
    "adoption_requirements" TEXT[],

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_email_key" ON "organizations"("email");
