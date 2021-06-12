import { Router } from 'express';
import taskRoutes from './task-routes';
import userRoutes from './user-routes';

const routes = Router();

routes.use('/api/v1/tasks', taskRoutes);
routes.use('/api/v1/users', userRoutes);

export default routes;
