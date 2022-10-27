import { HttpException } from '../../../errors/HttpException';
import { CategoryRepository } from '../repository/CategoryRepository';

export class DeleteCategory {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute(id: number, id_student: string): Promise<void> {
    const category = await this.repository.findOneById(id, id_student);

    if (!category) {
      throw new HttpException(400, 'category does not exist');
    }

    await this.repository.delete(id);
  }
}
