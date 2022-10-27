/*
    Class Logout
    @Params {string} TOKEN

    get token from headers
    get exp

    add {
        token: TOKEN
        exp: exp
    } to blacklist
*/

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
