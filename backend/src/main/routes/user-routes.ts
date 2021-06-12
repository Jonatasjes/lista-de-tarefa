import { Router } from 'express';
import UserControllers from 'src/adapters/presentation/controllers/UserControllers';

const userRoutes = Router();

const userControllers = new UserControllers();

userRoutes.route('/').post(userControllers.signup);
userRoutes.route('/:id').get(userControllers.show);

export default userRoutes;
