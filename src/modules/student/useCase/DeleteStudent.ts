import { StudentRepository } from '../reporitories/StudentRepository';

export class DeleteStudent {
  private repository;

  constructor(repository: StudentRepository) {
    this.repository = repository;
  }

  public async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
