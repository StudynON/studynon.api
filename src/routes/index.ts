import { Router } from 'express';
import { materialRouter } from './material.route';
import { rootRouter } from './root.routes';
import { studentRouter } from './student.route';

export const routes = Router();

routes.use('/student', studentRouter);
routes.use('/material', materialRouter);
routes.use('/', rootRouter);
