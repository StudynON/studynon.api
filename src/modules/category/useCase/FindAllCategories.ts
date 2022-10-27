import { CategoryRepository } from '../repository/CategoryRepository';

export class FindAllCategories {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute(studentId: string): Promise<object[]> {
    const category = await this.repository.findAll(studentId);

    return category;
  }
}
