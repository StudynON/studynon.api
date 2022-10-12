import {MaterialRepository} from '../repositories/MaterialRepository';

export default class FindAllMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute() {
    await this.repository.findAll();
  }
}
