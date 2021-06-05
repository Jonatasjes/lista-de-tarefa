import { Request, Response } from 'express';
import { TUpdateTask } from 'src/entities/task/task';
import CreateTaskService from 'src/usecases/tasks/CreateTaskService';
import DeleteTaskService from 'src/usecases/tasks/DeleteTaskService';
import GetAllTaskService from 'src/usecases/tasks/GetAllTaskService';
import GetTaskService from 'src/usecases/tasks/GetTaskService';
import UpdateTaskService from 'src/usecases/tasks/UpdateTaskService';

export default class TaskControllers {
  public async index(request: Request, response: Response): Promise<Response> {
    const getAllTaskService = new GetAllTaskService();

    const tasks = await getAllTaskService.execute();

    return response.status(200).json(tasks);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createTaskService = new CreateTaskService();

    const newTask = await createTaskService.execute(request.body);

    return response.status(201).json(newTask);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const getTaskService = new GetTaskService();

    const id: string = request.params.id;

    const task = await getTaskService.execute(id);

    return response.status(200).json(task);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateTaskService = new UpdateTaskService();

    const updateTask: TUpdateTask = {
      id: request.params.id,
      message: request.body.message,
    };

    const task = await updateTaskService.execute(updateTask);
    return response.status(200).json(task);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteTaskService = new DeleteTaskService();

    await deleteTaskService.execute(request.params.id);

    return response.status(204).json([]);
  }
}
