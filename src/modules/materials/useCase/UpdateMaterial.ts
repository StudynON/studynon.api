import { IMaterial } from '../../../lib/prisma';
import { MaterialRepository } from '../repositories/MaterialRepository';

export default class UpdateMaterial {
  private repository;

  constructor(repository: MaterialRepository) {
    this.repository = repository;
  }

  public async execute(id: number, material: IMaterial) {
    await this.repository.update(id, material);
  }
}
