import { IMaterial } from '../../../interfaces/IMaterial';
import { prisma as db } from '../../../lib/prisma';

export class MaterialRepository {
  async create(material: IMaterial) {
    return await db.material.create({
      data: material,
    });
  }

  async findOneById(id: number) {
    return await db.material.findUnique({
      where: { id },
      include: {
        student: {
          select: {
            id: true,
            email: true,
            name: true,
            profile_picture: true,
            created_at: true,
            updated_at: true,
          },
        },
      },
    });
  }
}
