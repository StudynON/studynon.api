import { IMaterialUpdate } from '../../../interfaces/IMaterial';
import { MaterialRepository } from '../repositories/MaterialRepository';

export default class UpdateMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute(material: IMaterialUpdate) {
    await this.repository.update(material);
  }
}
