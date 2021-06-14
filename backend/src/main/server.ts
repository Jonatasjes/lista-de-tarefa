import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import CustomError from './middleware/errors/CustomError';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import AppError from './errors/AppError';

dotenv.config({ path: './config.env' });

const server = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};
server.use(cors(corsOptions));

server.use(express.json());

server.use(routes);

server.use(CustomError);

const port = process.env.PORT || 3333;

const DB = process.env.DATABASE_LOCAL || 'mongodb://localhost:27017/todoList';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  .then(() => console.log(`Connection established with ${DB}`));

server.listen(port, () => {
  console.log(`Server listener on port ${port}! 💥 `);
});
