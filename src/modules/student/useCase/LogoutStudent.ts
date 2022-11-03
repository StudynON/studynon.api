import { HttpException } from '../../../errors/HttpException';
import { add } from '../../../lib/blacklist';

export class LogoutStudent {
  public static async execute(token: string, exp: number) {
    try {
      add(token, exp);

      return;
    } catch (error) {
      throw new HttpException(500, '');
    }
  }
}
