import Task, { ITask } from 'src/entities/task/task';
import AppError from 'src/main/errors/AppError';

export default class CreateTaskService {
  public async execute({ message }: ITask): Promise<ITask | AppError> {
    try {
      const newTask = await Task.create({
        message: message,
      });
      return newTask;
    } catch (err) {
      return new AppError(err.errors.message.message);
    }
  }
}
