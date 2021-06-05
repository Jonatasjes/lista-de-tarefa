import { Router } from 'express';
import TaskControllers from 'src/adapters/presentation/controllers/TaskControllers';

const taskroutes = Router();
const taskControllers = new TaskControllers();

taskroutes.route('/').get(taskControllers.index).post(taskControllers.create);

taskroutes
  .route('/:id')
  .get(taskControllers.show)
  .patch(taskControllers.update)
  .delete(taskControllers.delete);

export default taskroutes;
