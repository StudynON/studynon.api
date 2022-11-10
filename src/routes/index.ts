import { Router } from 'express';
import { materialRouter } from './material.route';
import { rootRouter } from './root.routes';
import { studentRouter } from './student.route';
import { loginRouter } from './login.route';
import { categoryRouter } from './category.route';
import { swaggerRouter } from './swagger.route';

export const routes = Router();

routes.use('/login', loginRouter);
routes.use('/student', studentRouter);
routes.use('/category', categoryRouter);
routes.use('/material', materialRouter);
routes.use('/swagger', swaggerRouter);
routes.use('/', rootRouter);