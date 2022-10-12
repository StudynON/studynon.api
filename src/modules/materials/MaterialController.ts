import { Request, Response } from 'express';
import { MaterialRepository } from './repositories/MaterialRepository';
import CreateMaterial from './useCase/CreateMaterial';
import FindOneMaterial from './useCase/FindOneMaterial';

const repository = new MaterialRepository();

export default class MaterialController {
  static async create(req: Request, res: Response) {
    const { material } = req.body;
    const createMaterial = new CreateMaterial(repository);

    await createMaterial.execute(material);

    return res.send(201);
  }

  static async findOneById(req: Request, res: Response) {
    const { id } = req.body;
    const findOneMaterial = new FindOneMaterial(repository);

    const material = await findOneMaterial.execute(id);

    return res.status(200).json(material);
  }
}
