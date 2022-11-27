import { IMaterial } from '../../../interfaces/IMaterial';
import { MaterialRepository } from '../repositories/MaterialRepository';

export default class UpdateMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute(id: string, material: IMaterial) {
    await this.repository.update(id, material);
  }
}
