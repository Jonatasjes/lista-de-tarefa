import Task, { ITask, TUpdateTask } from 'src/entities/task/task';
import AppError from 'src/main/errors/AppError';

export default class UpdateTaskService {
  public async execute({
    id,
    message,
  }: TUpdateTask): Promise<ITask | AppError | null> {
    try {
      const task = await Task.findByIdAndUpdate(
        id,
        { message: message },
        {
          new: true,
          runValidators: true,
        },
      );
      return task;
    } catch (err) {
      return new AppError('Task not found to update.', 404);
    }
  }
}
