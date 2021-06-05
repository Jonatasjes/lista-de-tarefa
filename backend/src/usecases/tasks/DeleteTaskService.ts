import Task from 'src/entities/task/task';
import AppError from 'src/main/errors/AppError';

export default class DeleteTaskService {
  public async execute(id: string): Promise<void | AppError> {
    try {
      await Task.deleteOne({ _id: id });
    } catch (err) {
      return new AppError('Task not found to delete.', 404);
    }
  }
}
