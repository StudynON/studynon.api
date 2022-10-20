import { HttpException } from '../../errors/HttpException';
import { Request, Response, NextFunction } from 'express';

export const ErrorException = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof HttpException) {
    return res.status(err.status).send({ message: err.message });
  }

  return next(res.sendStatus(500));
};
