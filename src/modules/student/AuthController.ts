import { Request, Response } from 'express';
import { StudentRepository } from './repositories/StudentRepository';
import { LoginStudent, LogoutStudent } from './useCase/';

const studentRepository = new StudentRepository();

export default class AuthController {
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

  static async logout(req: Request, res: Response) {
    const authorization = req.headers.authorization as string;
    const exp = req.student?.exp as number;

    const token = authorization.split(' ')[1];

    LogoutStudent.execute(token, exp);

    return res.sendStatus(200);
  }
}
