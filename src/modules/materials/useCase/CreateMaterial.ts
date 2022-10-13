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
