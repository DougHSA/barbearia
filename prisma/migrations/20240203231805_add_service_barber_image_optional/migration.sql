/*
  Warnings:

  - Added the required column `role` to the `Barber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `barberId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barber" ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "barberId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
