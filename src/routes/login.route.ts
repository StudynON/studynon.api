import { Router } from 'express';
import LoginController from '../modules/student/LoginController';

export const loginRouter = Router();

loginRouter.post('/', LoginController.login);
