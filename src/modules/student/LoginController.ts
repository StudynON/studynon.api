import { Request, Response } from 'express';
import { StudentRepository } from './repositories/StudentRepository';
import { LoginStudant } from './useCase/';

const studentRepository = new StudentRepository();

export default class LoginController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const loginStudant = new LoginStudant(studentRepository);

    await loginStudant.execute({
      email,
      password
    });

    return res.sendStatus(200);
  }
}
