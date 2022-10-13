import { Router } from 'express';
import { validateIdMaterial, validateMaterial } from '../middlewares/materials';
import MaterialController from '../modules/materials/MaterialController';

export const materialRouter = Router();

materialRouter.get('/', MaterialController.findAll);

materialRouter.get('/:id', validateIdMaterial, MaterialController.findOneById);

materialRouter.post('/', validateMaterial, MaterialController.create);

materialRouter.put(
  '/:id',
  validateIdMaterial,
  validateMaterial,
  MaterialController.update,
);

materialRouter.delete('/:id', validateIdMaterial, MaterialController.delete);
