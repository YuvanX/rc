/*
  Warnings:

  - Added the required column `heroImage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbImage` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "heroImage" TEXT NOT NULL,
ADD COLUMN     "thumbImage" TEXT NOT NULL;
