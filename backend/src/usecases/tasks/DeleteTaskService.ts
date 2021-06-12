import TasksRepository from 'src/external/repositories/mongodb/mongodb-task-repository';
import AppError from 'src/main/errors/AppError';

export default class DeleteTaskService {
  public async execute(id: string): Promise<void | AppError> {
    const tasksRepository = new TasksRepository();
    await tasksRepository.delete(id);
  }
}
