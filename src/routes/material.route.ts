import { Router } from 'express';
import MaterialController from '../modules/materials/MaterialController';

export const materialRouter = Router();

materialRouter.get('/:id', MaterialController.findOneById);

materialRouter.post('/', MaterialController.create);

materialRouter.put('/:id', MaterialController.update);
