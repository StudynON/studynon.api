import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { jwt_secret } from '../../config/vars';
import { HttpException } from '../../errors/HttpException';
import { checkToken } from '../../lib/blacklist';

export const requiredAuthentication = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new HttpException(400, 'Header is required');
  }

  const token = authorization.split(' ')[1];

  try {
    const payload = <{id: string, exp: number}>verify(token, jwt_secret);

    if (checkToken(token)) {
      throw new HttpException(400, 'Invalid token');
    }

    req.student = payload;

    return next();
  } catch {
    throw new HttpException(400, 'Invalid token');
  }
};
