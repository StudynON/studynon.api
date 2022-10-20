import { Request, Response } from 'express';
import { StudentRepository } from './repositories/StudentRepository';
import { LoginStudent } from './useCase/';

const studentRepository = new StudentRepository();

export default class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const loginStudent = new LoginStudent(studentRepository);

    const token = await loginStudent.execute({
      email,
      password
    });

    return res.status(200).json({
      token: token
    });
  }
}
