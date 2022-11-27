import { Router } from 'express';
import { requiredAuthentication } from '../middlewares/authentication/requiredAuthentication';
import { validateIdMaterial, validateMaterial } from '../middlewares/materials';
import MaterialController from '../modules/materials/MaterialController';

export const materialRouter = Router();

materialRouter.post('/',
  requiredAuthentication,
  validateMaterial,
  MaterialController.create
);

materialRouter.get('/',
  requiredAuthentication,
  MaterialController.findAll
);

materialRouter.get('/:id',
  requiredAuthentication,
  validateIdMaterial,
  MaterialController.findOneById
);

materialRouter.put('/:id',
  requiredAuthentication,
  validateIdMaterial,
  validateMaterial,
  MaterialController.update,
);

materialRouter.delete('/:id',
  requiredAuthentication,
  validateIdMaterial,
  MaterialController.delete
);
