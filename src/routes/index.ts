import { Router } from 'express';
import { rootRouter } from './root.routes';

export const routes = Router();

routes.use('/', rootRouter);
