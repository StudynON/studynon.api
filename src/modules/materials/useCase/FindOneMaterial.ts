import { MaterialRepository } from '../repositories/MaterialRepository';

export default class FindOneMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute(id: string) {
    return await this.repository.findOneById(id);
  }
}
