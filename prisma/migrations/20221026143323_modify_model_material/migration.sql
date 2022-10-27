-- DropForeignKey
ALTER TABLE "material" DROP CONSTRAINT "material_id_category_fkey";

-- AddForeignKey
ALTER TABLE "material" ADD CONSTRAINT "material_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
