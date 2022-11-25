import { ICategory } from '../../../interfaces/ICategory';
import { CategoryRepository } from '../repository/CategoryRepository';

export class UpdateCategory {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute(
    id: string,
    {
      id_student,
      name,
      color
    }: ICategory): Promise<void> {
    await this.repository.update(id, {
      id_student,
      name,
      color
    });
  }
}
