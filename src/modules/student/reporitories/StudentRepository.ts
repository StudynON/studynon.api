import { IStudent, IStudentUpdate } from '../../../interfaces/IStudent';
import { prisma as db } from '../../../lib/prisma';

export class StudentRepository {
  async create(student: IStudent) {
    return await db.student.create({
      data: student,
    });
  }

  async findByEmail(email: string) {
    return await db.student.findUnique({
      where: { email: email },
    });
  }

  async update(id: string, data: IStudentUpdate) {
    return await db.student.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await db.student.delete({
      where: { id },
    });
  }
}
