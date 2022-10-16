import { IStudent } from '../../../interfaces/IStudent';
import { prisma as db } from '../../../lib/prisma';

export class StudentRepository {
  async create(student: IStudent) {
    return await db.student.create({
      data: student,
    });
  }

  async findByEmail(email: string) {
    const studennt = await db.student.findUnique({
      where: { email: email },
    });

    return studennt;
  }

  async update(id: string, data: IStudent) {
    await db.student.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await db.student.delete({
      where: { id },
    });
  }
}
