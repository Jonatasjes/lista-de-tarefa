import { Router } from 'express';
import TaskControllers from 'src/adapters/presentation/controllers/TaskController';
import isAuthenticated from '../middleware/authentication/isAuthenticated';

const taskRoutes = Router();
const taskControllers = new TaskControllers();

taskRoutes
  .route('/')
  .get(isAuthenticated, taskControllers.index)
  .post(isAuthenticated, taskControllers.create);

taskRoutes
  .route('/:id')
  .get(isAuthenticated, taskControllers.show)
  .patch(isAuthenticated, taskControllers.update)
  .delete(isAuthenticated, taskControllers.delete);

export default taskRoutes;
