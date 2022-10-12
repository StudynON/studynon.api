import { HttpException } from '../../../errors/HttpException';
import Validate from '../../../helpers/validate-parameters';
import { IMaterial } from '../../../interfaces/IMaterial';
import { MaterialRepository } from '../repositories/MaterialRepository';

export default class CreateMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute({
    media,
    link,
    title,
    lifetime_access,
    deadline,
    school,
    id_category,
    id_student,
  }: IMaterial): Promise<void> {
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

    if (!Validate.isNumber(id_category)) {
      invalidData.push('id_category must be number');
    }

    if (!Validate.isString(id_student)) {
      invalidData.push('id_student must be string');
    }

    await this.repository.create({
      media,
      link,
      title,
      lifetime_access,
      deadline,
      school,
      id_category,
      id_student,
    });
  }
}
