import { Router } from 'express';
import StudentController from '../modules/student/StudentController';

export const studentRouter = Router();

studentRouter.post('/', StudentController.create);
studentRouter.put('/update/:id', StudentController.update);
studentRouter.delete('/delete/:id', StudentController.delete);
