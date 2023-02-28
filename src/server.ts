/* eslint-disable no-console */
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
// TODO: Melhorar as importações da aplicação
import { routes } from './routes/index';
import './shared/container';
import AppError from './shared/errors/AppError';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(5000, () => console.log('🏃 Server Running...'));
