import { ITask, TUpdateTask } from 'src/entities/task/task';
import TasksRepository from 'src/external/repositories/mongodb/mongodb-task-repository';
import AppError from 'src/main/errors/AppError';

export default class UpdateTaskService {
  public async execute({
    id,
    message,
  }: TUpdateTask): Promise<ITask | AppError | null> {
    if (!message) return new AppError('The task must have a message.');

    const tasksRepository = new TasksRepository();
    const HasTask = await tasksRepository.findById(id);

    if (!HasTask)
      return new AppError('There is no task with this id. Try another one.');

    const fields: TUpdateTask = {
      id: id,
      message: message,
      updatedAt: new Date(Date.now()),
    };
    const task = tasksRepository.update(fields);

    return task;
  }
}
