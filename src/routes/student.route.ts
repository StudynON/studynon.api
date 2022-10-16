import { Router } from 'express';
import { validateStudent, validateStudentId } from '../middlewares/student';
import StudentController from '../modules/student/StudentController';

export const studentRouter = Router();

studentRouter.post('/',
  validateStudent,
  StudentController.create
);

studentRouter.put('/update/:id',
  validateStudentId,
  validateStudent,
  StudentController.update
);

studentRouter.delete('/delete/:id',
  validateStudentId,
  StudentController.delete
);
