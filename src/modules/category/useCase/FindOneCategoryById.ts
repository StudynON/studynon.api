import { HttpException } from '../../../errors/HttpException';
import { CategoryRepository } from '../repository/CategoryRepository';

export class FindOneCategoryById {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute(id: string, studentId: string): Promise<object> {
    const category = await this.repository.findOneById(id, studentId);

    if (!category) {
      throw new HttpException(400, 'category not found');
    }

    return category;
  }
}
