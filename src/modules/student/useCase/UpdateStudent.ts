import { hash } from 'bcrypt';
import { IStudentUpdate } from '../../../interfaces/IStudent';
import { StudentRepository } from '../reporitories/StudentRepository';

export class UpdateStudent {
  private repository;

  constructor(repository: StudentRepository) {
    this.repository = repository;
  }

  public async execute({
    id,
    name,
    email,
    profile_picture,
    password
  }: IStudentUpdate): Promise<void> {
    const hashedPassword = await hash(password, 14);

    await this.repository.update(
      id,
    {
      name,
      email,
      profile_picture,
      password: hashedPassword,
    } as IStudentUpdate);
  }
}
