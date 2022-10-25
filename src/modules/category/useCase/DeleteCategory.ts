import { CategoryRepository } from '../repository/CategoryRepository';

export class DeleteCategory {
  private repository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  async execute(id: number, id_student: string): Promise<void> {
    await this.repository.delete(id, id_student);
  }
}
