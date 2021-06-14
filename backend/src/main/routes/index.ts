import { Router } from 'express';
import sessionRoutes from './session-routes';
import taskRoutes from './task-routes';
import userRoutes from './user-routes';

const routes = Router();

routes.use('/api/v1/tasks', taskRoutes);
routes.use('/api/v1/users', userRoutes);
routes.use('/api/v1/session', sessionRoutes);

export default routes;
