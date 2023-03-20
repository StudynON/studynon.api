import { Router, Request, Response } from 'express';

export const rootRouter = Router();

rootRouter.use('/', (req: Request, res: Response) => {
  res.send('Studyon Api');
});
