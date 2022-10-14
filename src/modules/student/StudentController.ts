import { Request, Response } from 'express';
import { StudentRepository } from './reporitories/StudentRepository';
import { CreateStudent } from './useCase/CreateStudent';

const repository = new StudentRepository();

export default class StudentController {
  static async create(req: Request, res: Response) {
    const { name, email, profile_picture, password } = req.body;

    const createStudent = new CreateStudent(repository);

    await createStudent.execute({
      name,
      email,
      profile_picture,
      password
    });

    return res.sendStatus(201);
  }
}
