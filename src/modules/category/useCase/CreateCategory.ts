import { ICategory } from '../../../interfaces/ICategory';
import { CategoryRepository } from '../repository/CategoryRepository';

export class CreateCategory {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute({
    id_student,
    name,
    color
  }: ICategory): Promise<void> {
    await this.repository.create({
      id_student,
      name,
      color
    });
  }
}
