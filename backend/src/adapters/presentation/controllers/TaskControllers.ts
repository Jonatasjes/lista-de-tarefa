import { Request, Response } from 'express';
import { ITask, TUpdateTask } from 'src/entities/task/task';
import AppError from 'src/main/errors/AppError';
import CreateTaskService from 'src/usecases/tasks/CreateTaskService';
import DeleteTaskService from 'src/usecases/tasks/DeleteTaskService';
import GetAllTaskService from 'src/usecases/tasks/GetAllTaskService';
import GetTaskService from 'src/usecases/tasks/GetTaskService';
import UpdateTaskService from 'src/usecases/tasks/UpdateTaskService';

export default class TaskControllers {
  public async index(request: Request, response: Response): Promise<Response> {
    const getAllTaskService = new GetAllTaskService();

    let tasks = await getAllTaskService.execute(request);
    const searchTerm = request.query.search as string;

    const findTasks: ITask[] = await tasks.filter(task => {
      if (task.message.includes(searchTerm)) {
        return task;
      }
    });

    if ((findTasks && findTasks.length > 0) || searchTerm.length > 0) {
      tasks = findTasks;
    }

    return response.status(200).json(tasks);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createTaskService = new CreateTaskService();

    const newTask = await createTaskService.execute(request.body);

    const statusCode = newTask instanceof AppError ? newTask.statusCode : 201;

    return response.status(statusCode).json(newTask);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const getTaskService = new GetTaskService();

    const id: string = request.params.id;

    const task = await getTaskService.execute(id);

    const statusCode = task instanceof AppError ? task.statusCode : 200;

    return response.status(statusCode).json(task);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateTaskService = new UpdateTaskService();

    const updateTask: TUpdateTask = {
      id: request.params.id,
      message: request.body.message,
      updatedAt: new Date(),
    };

    const task = await updateTaskService.execute(updateTask);

    const statusCode = task instanceof AppError ? task.statusCode : 200;

    return response.status(statusCode).json(task);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteTaskService = new DeleteTaskService();

    await deleteTaskService.execute(request.params.id);

    return response.status(204).json([]);
  }
}
