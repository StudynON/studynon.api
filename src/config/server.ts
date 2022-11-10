import express from 'express';
import cors from 'cors';
import { ErrorException } from '../middlewares/error';
import { routes } from '../routes';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDocs from 'swagger-jsdoc';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(routes);
app.use(ErrorException);
export const options = {
  definition: {
    opneapi: '3.0.0',
    info: {
      title: 'Owlrange swagger',
      version: '1.0.0',
      description: 'bacondeveight',
    },
    servers: [
      {
        URL: 'http://localhost:4000',
      },
    ],
  },
  apis: ['../routes/*.ts'],
};

const specs = swaggerJsDocs(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

// app.use(
//   './swagger',
//   swaggerUI.serve,
//   swaggerUI.setup(undefined, {
//     swaggerOptions: {
//       URL: '/swagger.json',
//     }
//   })
// );
