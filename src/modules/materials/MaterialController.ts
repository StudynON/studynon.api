import { Request, Response } from 'express';
import { MaterialRepository } from './repositories/MaterialRepository';
import CreateMaterial from './useCase/CreateMaterial';

const repository = new MaterialRepository();

export default class MaterialController {
  static async create(req: Request, res: Response) {
    const { material } = req.body;
    const createMaterial = new CreateMaterial(repository);

    await createMaterial.execute(material);

    return res.send(201);
  }
}
