import { ITask } from 'src/entities/task/task';
import TasksRepository from 'src/external/repositories/mongodb/mongodb-task-repository';
import AppError from 'src/main/errors/AppError';

export default class GetTaskService {
  public async execute(id: string): Promise<ITask | AppError | null> {
    const tasksRepository = new TasksRepository();

    const task = await tasksRepository.findById(id);

    if (!task) return new AppError('Task is not found.');

    return task;
  }
}
