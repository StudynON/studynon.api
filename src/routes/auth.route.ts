import { Router } from 'express';
import AuthController from '../modules/student/AuthController';
import { requiredAuthentication } from '../middlewares/authentication/requiredAuthentication';

export const authRouter = Router();

authRouter.post('/login', AuthController.login);
authRouter.post('/logout', requiredAuthentication, AuthController.logout);
