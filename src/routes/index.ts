import { Router } from 'express';
import { materialRouter } from './material.route';
import { rootRouter } from './root.routes';
import { studentRouter } from './student.route';
import { categoryRouter } from './category.route';
import { authRouter } from './auth.route';

export const routes = Router();

routes.use('/auth', authRouter);
routes.use('/student', studentRouter);
routes.use('/category', categoryRouter);
routes.use('/material', materialRouter);
routes.use('/', rootRouter);
