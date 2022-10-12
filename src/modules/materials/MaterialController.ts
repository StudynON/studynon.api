import { Request, Response } from 'express';
import { IMaterialUpdate } from '../../interfaces/IMaterial';
import { MaterialRepository } from './repositories/MaterialRepository';
import CreateMaterial from './useCase/CreateMaterial';
import FindOneMaterial from './useCase/FindOneMaterial';
import UpdateMaterial from './useCase/UpdateMaterial';

const repository = new MaterialRepository();

export default class MaterialController {
  static async create(req: Request, res: Response) {
    const { material } = req.body;

    const createMaterial = new CreateMaterial(repository);

    await createMaterial.execute(material);

    return res.sendStatus(201);
  }

  static async findOneById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const findOneMaterial = new FindOneMaterial(repository);

    const material = await findOneMaterial.execute(id);

    return res.status(200).json(material);
  }

  static async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const material = {
      id,
      ...req.body,
    } as IMaterialUpdate;

    const updateMaterial = new UpdateMaterial(repository);

    await updateMaterial.execute(material);

    return res.sendStatus(201);
  }
}
