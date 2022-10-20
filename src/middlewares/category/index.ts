import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../errors/HttpException';
import Validate from '../../helpers/validate-parameters';

export function validateCategory(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    name,
    color
  } = req.body;

  const missingData: string[] = [];
  const invalidData = [];

  if(!name) {
    missingData.push('name');
  }

  if(!color) {
    missingData.push('color');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  if (!Validate.isString(name)) {
    invalidData.push('name must be string');
  }

  if(!Validate.isString(color)) {
    invalidData.push('color must be string');
  }

  if (invalidData.length > 0) {
    throw new HttpException(
      400,
      `Invalid fields: ${invalidData.join(', ')}`
    );
  }

  next();
}
