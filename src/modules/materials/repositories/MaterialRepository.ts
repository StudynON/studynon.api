import { IMaterial } from '../../../interfaces/IMaterial';
import { prisma as db } from '../../../lib/prisma';

export class MaterialRepository {
  async create(material: IMaterial) {
    return await db.material.create({
      data: material,
    });
  }
}
