/*
  Warnings:

  - Added the required column `coordX` to the `Coordinate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordY` to the `Coordinate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coordinate" ADD COLUMN     "coordX" INTEGER NOT NULL,
ADD COLUMN     "coordY" INTEGER NOT NULL;
