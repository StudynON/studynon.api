import { Request, Response } from 'express';
import { CategoryRepository } from './repository/CategoryRepository';
import { CreateCategory, DeleteCategory, FindAllCategories, FindOneCategoryById, UpdateCategory } from './useCase/index';

const repository = new CategoryRepository();
export default class CategoryController {
  static async create(req: Request, res: Response) {
    const id_student = req.student?.id as string;
    const { name, color } = req.body;

    const createCatgory = new CreateCategory(repository);

    await createCatgory.execute({
      id_student,
      name,
      color
    });

    return res.sendStatus(201);
  }

  static async findOneCategoryById(req: Request, res: Response) {
    const id_student = req.student?.id as string;
    const { id } = req.body;

    const findOneCategory = new FindOneCategoryById(repository);

    const category = await findOneCategory.execute(id, id_student);

    res.status(200).json(category);
  }

  static async findAllCategories(req: Request, res: Response) {
    const id_student = req.student?.id as string;

    const findAllCategory = new FindAllCategories(repository);

    const categories = await findAllCategory.execute(id_student);

    res.status(200).json(categories);
  }

  static async updateCategory(req: Request, res: Response) {
    const id_student = req.student?.id as string;
    const { id, name, color } = req.body;

    const updateCategory = new UpdateCategory(repository);

    await updateCategory.execute(id, {
      id_student,
      name,
      color
    });

    res.sendStatus(200);
  }

  static async deleteCategory(req: Request, res: Response) {
    const id_student = req.student?.id as string;
    const { id } = req.body;

    const deleteCategory = new DeleteCategory(repository);

    await deleteCategory.execute(id, id_student);

    res.sendStatus(200);
  }
}
