import { IMaterial } from '../../../interfaces/IMaterial';
import { prisma as db } from '../../../lib/prisma';

export class MaterialRepository {
  async create(material: IMaterial) {
    return await db.material.create({
      data: material,
    });
  }

  async findOneById(id: string) {
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

  async findAll(id_student: string) {
    return await db.material.findMany({
      where: {
        id_student: id_student,
      },
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

  async update(id: string, material: IMaterial) {
    return await db.material.update({
      where: { id },
      data: material,
    });
  }

  async delete(id: string) {
    return await db.material.delete({
      where: { id },
    });
  }
}
