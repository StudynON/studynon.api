import { Router } from 'express';
import { materialRouter } from './material.route';
import { rootRouter } from './root.routes';

export const routes = Router();

routes.use('/material', materialRouter);
routes.use('/', rootRouter);
