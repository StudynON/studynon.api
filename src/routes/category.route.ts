import { Router } from 'express';
import { requiredAuthentication } from '../middlewares/authentication/requiredAuthentication';
import { validateCategory, validateIdCategory } from '../middlewares/category';
import CategoryController from '../modules/category/CategoryController';

export const categoryRouter = Router();

categoryRouter.post('/',
  requiredAuthentication,
  validateCategory,
  CategoryController.create
);

categoryRouter.post('/find-all',
  requiredAuthentication,
  validateIdCategory,
  CategoryController.findAllCategories
);

categoryRouter.post('/find-one',
  requiredAuthentication,
  validateIdCategory,
  CategoryController.findOneCategoryById
);

categoryRouter.put('/update',
  requiredAuthentication,
  validateIdCategory,
  validateCategory,
  CategoryController.updateCategory
);

categoryRouter.delete('/delete',
  requiredAuthentication,
  validateIdCategory, 
  CategoryController.deleteCategory
);
