import { HttpException } from '../../../errors/HttpException';
import { addToBlacklist } from '../../../lib/blacklist';

export class LogoutStudent {
  public static async execute(token: string, exp: number) {
    try {
      addToBlacklist({
        token,
        exp
      });

      return;
    } catch (error) {
      throw new HttpException(500, '');
    }
  }
}
