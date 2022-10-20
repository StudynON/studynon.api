import { Router } from 'express';
import { requiredAuthentication } from '../middlewares/authentication/requiredAuthentication';
import { validateStudent, validateStudentId } from '../middlewares/student';
import StudentController from '../modules/student/StudentController';

export const studentRouter = Router();

studentRouter.post('/',
  validateStudent,
  StudentController.create
);

studentRouter.put('/update',
  requiredAuthentication,
  validateStudentId,
  validateStudent,
  StudentController.update
);

studentRouter.delete('/delete',
  requiredAuthentication,
  validateStudentId,
  StudentController.delete
);
