import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../errors/HttpException';
import Validate from '../../helpers/validate-parameters';

export function validateCategory (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    name,
    color
  } = req.body;
  const studentId = req.student?.id as string;

  const missingData: string[] = [];
  const invalidData = [];

  if(!studentId) {
    missingData.push('student id');
  }

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

  if (!Validate.isString(studentId)) {
    invalidData.push('student id must be string');
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

export function validateIdCategory (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  const missingData: string[] = [];
  const invalidData = [];

  if(!id) {
    missingData.push('id');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  if (!Validate.isNumber(id)) {
    invalidData.push('id must be a number');
  }

  if (invalidData.length > 0) {
    throw new HttpException(
      400,
      `Invalid fields: ${invalidData.join(', ')}`
    );
  }

  next();
}
