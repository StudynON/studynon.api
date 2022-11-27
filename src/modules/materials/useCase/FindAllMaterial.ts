import { MaterialRepository } from '../repositories/MaterialRepository';

export default class FindAllMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute(id_student: string) {
    return await this.repository.findAll(id_student);
  }
}
