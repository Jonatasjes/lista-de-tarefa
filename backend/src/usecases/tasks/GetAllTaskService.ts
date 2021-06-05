import Task, { ITask } from 'src/entities/task/task';

export default class GetAllTaskService {
  public async execute(): Promise<ITask[]> {
    const tasks = await Task.find();

    return tasks;
  }
}
