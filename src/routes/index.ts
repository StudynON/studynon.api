import { Router } from 'express';
import { materialRouter } from './material.route';
import { rootRouter } from './root.routes';
import { studentRouter } from './student.route';
import { loginRouter } from './login.route';

export const routes = Router();

routes.use('/login', loginRouter);
routes.use('/student', studentRouter);
routes.use('/material', materialRouter);
routes.use('/', rootRouter);
