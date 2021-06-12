import { ITask } from 'src/entities/task/task';
import TasksRepository from 'src/external/repositories/mongodb/mongodb-task-repository';
import AppError from 'src/main/errors/AppError';

export default class CreateTaskService {
  public async execute(message: ITask): Promise<ITask | AppError | null> {
    if (!message.message) return new AppError('The task must have a message.');

    const tasksRepository = new TasksRepository();

    const newTask = await tasksRepository.create(message);

    return newTask;
  }
}
