import { hash } from 'bcrypt';
import { salt_rounds } from '../../../config/vars';
import { IStudent } from '../../../interfaces/IStudent';
import { HttpException } from '../../../errors/HttpException';
import { StudentRepository } from '../repositories/StudentRepository';

export class CreateStudent {
  private repository;

  constructor(repository: StudentRepository) {
    this.repository = repository;
  }

  public async execute({
    name,
    email,
    profile_picture,
    password
  }: IStudent): Promise<void> {
    const student = await this.repository.findByEmail(email);

    if (student) {
      throw new HttpException(400, 'student or email already exists');
    }

    const hashedPassword = await hash(password, salt_rounds);

    await this.repository.create({
      name,
      email,
      profile_picture,
      password: hashedPassword,
    } as IStudent);
  }
}
