import { Request, Response } from 'express';
import { LogoutStudent } from './useCase/';

export default class LogoutController {
  static async logout(req: Request, res: Response) {
    const authorization = req.headers.authorization as string;
    const exp = req.user?.exp as number;

    const token = authorization.split(' ')[1];

    LogoutStudent.execute(token, exp);

    return res.sendStatus(200);
  }
}
