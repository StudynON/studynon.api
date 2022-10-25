import { CategoryRepository } from '../repository/CategoryRepository';

export class FindOneCategoryById {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute(id: number, studentId: string): Promise<object | null> {
    const category = await this.repository.findOneById(id, studentId);

    return category;
  }
}
