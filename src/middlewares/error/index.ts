import { HttpException } from '../../errors/HttpException';
import { Request, Response, NextFunction } from 'express';

export const ErrorException = (
  err: HttpException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    return res.status(err.status).send({ message: err.message });
  }

  console.error(err);

  return res.sendStatus(500);
};
