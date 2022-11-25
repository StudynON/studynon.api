/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `material` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "material" DROP CONSTRAINT "material_id_category_fkey";

-- AlterTable
ALTER TABLE "category" DROP CONSTRAINT "category_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "category_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "category_id_seq";

-- AlterTable
ALTER TABLE "material" DROP CONSTRAINT "material_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_category" SET DATA TYPE TEXT,
ADD CONSTRAINT "material_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "material_id_seq";

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
