import { Request } from 'express';
import { ITask } from 'src/entities/task/task';
import TasksRepository from 'src/external/repositories/mongodb/mongodb-task-repository';

export default class GetAllTaskService {
  public async execute(request: Request): Promise<ITask[]> {
    const tasksRepository = new TasksRepository();
    const tasks = await tasksRepository.find(request);

    return tasks;
  }
}
