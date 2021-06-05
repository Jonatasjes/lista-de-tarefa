import Task, { ITask } from 'src/entities/task/task';
import AppError from 'src/main/errors/AppError';

export default class GetTaskService {
  public async execute(id: string): Promise<ITask | AppError | null> {
    try {
      const task = await Task.findById(id);
      return task;
    } catch (err) {
      return new AppError('Does not find any task with this id', 404);
    }
  }
}
