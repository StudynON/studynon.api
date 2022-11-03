import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;

  declare namespace Express {
    export interface Request {
      student?: {
        id: string;
      }
    }
  }
}
