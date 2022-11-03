import { Request, Response } from 'express';
import { StudentRepository } from './repositories/StudentRepository';
import { CreateStudent, DeleteStudent, UpdateStudent } from './useCase/';

const repository = new StudentRepository();

export default class StudentController {
  static async create(req: Request, res: Response) {
    const { name, email, profile_picture, password } = req.body;

    const createStudent = new CreateStudent(repository);

    await createStudent.execute({
      name,
      email,
      profile_picture,
      password,
    });

    return res.sendStatus(201);
  }

  static async update(req: Request, res: Response) {
    const id = req.student?.id as string;

    const { name, email, profile_picture, password } = req.body;
    const updateStudent = new UpdateStudent(repository);

    await updateStudent.execute(id, { name, email, profile_picture, password });

    return res.sendStatus(200);
  }

  static async delete(req: Request, res: Response) {
    const id = req.student?.id as string;

    const deleteStudent = new DeleteStudent(repository);

    await deleteStudent.execute(id);

    return res.sendStatus(200);
  }
}
