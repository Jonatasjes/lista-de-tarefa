import { Router } from 'express';
import UserController from 'src/adapters/presentation/controllers/UserController';
import isAuthenticated from '../middleware/authentication/isAuthenticated';

const userRoutes = Router();

const userController = new UserController();

userRoutes
  .route('/')
  .get(isAuthenticated, userController.index)
  .post(userController.signup);

userRoutes.route('/:id').get(isAuthenticated, userController.show);

export default userRoutes;
