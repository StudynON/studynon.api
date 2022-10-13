import { Request, Response } from 'express';
import { MaterialRepository } from './repositories/MaterialRepository';
import CreateMaterial from './useCase/CreateMaterial';
import FindOneMaterial from './useCase/FindOneMaterial';
import UpdateMaterial from './useCase/UpdateMaterial';
import FindAllMaterial from './useCase/FindAllMaterial';
import DeleteMaterial from './useCase/DeleteMaterial';

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

  static async findAll(req: Request, res: Response) {
    const findAllMaterial = new FindAllMaterial(repository);

    const material = await findAllMaterial.execute();

    return res.status(200).json(material);
  }

  static async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { material } = req.body;

    const updateMaterial = new UpdateMaterial(repository);

    await updateMaterial.execute(id, material);

    return res.sendStatus(201);
  }

  static async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const deleteMaterial = new DeleteMaterial(repository);

    await deleteMaterial.execute(id);

    return res.status(200).json();
  }
}
