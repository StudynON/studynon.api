/*
  Warnings:

  - Added the required column `color` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_student` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "category" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "id_student" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
