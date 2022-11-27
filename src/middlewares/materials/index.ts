import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../../errors/HttpException';
import Validate from '../../helpers/validate-parameters';

export function validateMaterial(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const {
    media,
    link,
    title,
    deadline,
    lifetime_access,
    school,
    id_category,
  } = req.body;
  const id_student = req.student?.id as string;
  const missingData: string[] = [];
  const invalidData = [];

  if (!media) {
    missingData.push('media');
  }

  if (!link) {
    missingData.push('link');
  }

  if (!title) {
    missingData.push('title');
  }

  if (lifetime_access === undefined || lifetime_access === null) {
    missingData.push('lifetime_access');
  }

  if (!lifetime_access && !deadline) {
    missingData.push('deadline');
  }

  if (!school) {
    missingData.push('school');
  }

  if (!id_category) {
    missingData.push('id_category');
  }

  if (!id_student) {
    missingData.push('id_student');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  if (!Validate.isString(media)) {
    invalidData.push('media must be string');
  }

  if (!Validate.isString(link)) {
    invalidData.push('link must be string');
  }

  if (!Validate.isString(title)) {
    invalidData.push('title must be string');
  }

  if (!Validate.isBoolean(lifetime_access)) {
    invalidData.push('lifetime_access must be boolean');
  }

  if (deadline && typeof deadline != 'object') {
    invalidData.push('deadline must be date');
  }

  if (!Validate.isString(school)) {
    invalidData.push('school must be string');
  }

  if (!Validate.isString(id_category)) {
    invalidData.push('id_category must be strinf');
  }

  if (!Validate.isString(id_student)) {
    invalidData.push('id_student must be string');
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
}

export function validateIdMaterial(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  const missingData: string[] = [];
  const invalidData = [];

  if (!id) {
    missingData.push('id');
  }

  if (missingData.length > 0) {
    throw new HttpException(
      400,
      `Missing required fields: ${missingData.join(', ')}`,
    );
  }

  if (!Validate.isString(id)) {
    invalidData.push('id');
  }

  if (invalidData.length > 0) {
    throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
  }

  next();
}
