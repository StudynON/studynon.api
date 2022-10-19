import express from 'express';
import cors from 'cors';
import { ErrorException } from '../middlewares/error';
import { routes } from '../routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);
app.use(ErrorException);
