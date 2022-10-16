import { hash } from 'bcrypt';
import { IStudent } from '../../../interfaces/IStudent';
import { StudentRepository } from '../repositories/StudentRepository';

export class UpdateStudent {
  private repository;

  constructor(repository: StudentRepository) {
    this.repository = repository;
  }

  public async execute(id: string, {
    name,
    email,
    profile_picture,
    password
  }: IStudent): Promise<void> {
    let newPassword = password;

    if(password) {
      newPassword = await hash(newPassword, 14);
    }

    await this.repository.update(
      id,
    {
      name,
      email,
      profile_picture,
      password: newPassword,
    } as IStudent);
  }
}
