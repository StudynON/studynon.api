import { StudentRepository } from '../repositories/StudentRepository';
import { sign } from 'jsonwebtoken';
import { jwt_secret } from '../../../config/vars';
import { HttpException } from '../../../errors/HttpException';
import Validate from '../../../helpers/validate-parameters';
import hash from 'bcrypt';

interface ILoginProps {
  email: string;
  password: string;
}

export class LoginStudent {
  private studentRepository;

  constructor (studentRepository: StudentRepository) {
    this.studentRepository = studentRepository;
  }


  public async execute ({email, password}: ILoginProps) {
    const invalidData = [];

    if (!Validate.isEmail(email)) {
      invalidData.push('Invalid email.');
    }

    if (!Validate.isString(password) || !Validate.isNotEmpty(password)) {
      invalidData.push('Invalid password.');
    }

    if (invalidData.length) {
      throw new HttpException(400, `Invalid fields: ${invalidData.join(', ')}`);
    }

    const student = await this.studentRepository.findByEmail(email);

    if (!student || !hash.compareSync(password, student.password)) {
      throw new HttpException(400, 'Invalid credentials.');
    }

    const payload = {
      id: student.id,
      exp: Math.floor(Date.now() / 1000) + 3600,
    };

    const token = sign(payload, jwt_secret);

    return token;
  }
}
