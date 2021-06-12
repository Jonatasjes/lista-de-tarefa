import { Router } from 'express';
import TaskControllers from 'src/adapters/presentation/controllers/TaskControllers';

const taskRoutes = Router();
const taskControllers = new TaskControllers();

taskRoutes.route('/').get(taskControllers.index).post(taskControllers.create);

taskRoutes
  .route('/:id')
  .get(taskControllers.show)
  .patch(taskControllers.update)
  .delete(taskControllers.delete);

export default taskRoutes;
