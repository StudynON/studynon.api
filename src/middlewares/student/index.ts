import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../errors/HttpException';
import Validate from '../../helpers/validate-parameters';

export function validateStudent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    name,
    email,
    profile_picture,
    password
  } = req.body;

  const missingData: string[] = [];
  const invalidData = [];


  if (!name) {
    missingData.push('name');
  }

  if (!email) {
    missingData.push('email');
  }

  if (!password) {
    missingData.push('password');
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

  if (!Validate.isString(email)) {
    invalidData.push('email must be string');
  }

  if(!Validate.isEmail(email)) {
    invalidData.push('email format invalid');
  }

  if (!Validate.isString(password)) {
    invalidData.push('password must be string');
  }

  if (password.length < 6) {
    invalidData.push('password length invalid');
  }

  if (profile_picture) {
    if (!Validate.isString(profile_picture)) {
      invalidData.push('profile_picture must be string');
    }
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
}

export function validateStudentId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = req.user?.id;
  const missingData: string[] = [];

  if (!id) {
    missingData.push('id');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  next();
}
