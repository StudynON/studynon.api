import { prisma as db } from '../../../lib/prisma';
import { ICategory } from '../../../interfaces/ICategory';

export class CategoryRepository {
  async create(category: ICategory) {
    await db.category.create({
      data: category
    });
  }

  async findOneById(id: string, studentId: string) {
    const category = await db.category.findFirst({
      where: {
        AND: [
          {
            id_student: {
              equals: studentId
            }
          },
          {
            id: {
              equals: id
            }
          }
        ]
      },
    });

    return category;
  }

  async findAll(studentId: string) {
    const categorys = await db.category.findMany({
      where: {
        id_student: studentId
      }
    });

    return categorys;
  }

  async update(id: string, data: ICategory) {
    await db.category.update({
      where: {
        id: id
      },
      data: data
    });
  }

  async delete(id: string) {
    await db.category.delete({
      where: {
        id: id
      }
    });
  }
}
