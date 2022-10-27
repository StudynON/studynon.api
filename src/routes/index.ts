import { Router } from 'express';
import { materialRouter } from './material.route';
import { rootRouter } from './root.routes';
import { studentRouter } from './student.route';
import { loginRouter } from './login.route';
import { logoutRouter } from './logout.route';

export const routes = Router();

routes.use('/login', loginRouter);
routes.use('/logout', logoutRouter);
routes.use('/student', studentRouter);
routes.use('/material', materialRouter);
routes.use('/', rootRouter);
