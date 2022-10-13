import { hash } from 'bcrypt';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentRepository } from '../reporitories/StudentRepository';

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

    if (student) return;

    const hashedPassword = await hash(password, 14);

    await this.repository.create({
      name,
      email,
      profile_picture,
      password: hashedPassword,
    } as IStudent);
  }
}
