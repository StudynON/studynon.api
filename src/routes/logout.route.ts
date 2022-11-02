import { Router } from 'express';
import LogoutController from '../modules/student/LogoutController';
import { requiredAuthentication } from '../middlewares/authentication/requiredAuthentication';

export const logoutRouter = Router();

logoutRouter.post('/', requiredAuthentication, LogoutController.logout);
