import { Request } from 'express';
import Task, { ITask, TUpdateTask } from 'src/entities/task/task';
import APIFeatures from 'src/external/utils/ApiFeatures';

export default class TasksRepository {
  public async find(request: Request): Promise<ITask[]> {
    const features = new APIFeatures(Task.find(), request.query).paginate();
    const tasks = await features.query;
    return tasks;
  }

  public async findById(id: string): Promise<ITask | null> {
    try {
      const task = await Task.findById(id).exec();
      return task;
    } catch (err) {
      return null;
    }
  }

  public async create(message: ITask): Promise<ITask> {
    const newTask = await Task.create(message);
    return newTask;
  }

  public async update({
    id,
    message,
    updatedAt,
  }: TUpdateTask): Promise<ITask | null> {
    const task = await Task.findByIdAndUpdate(
      id,
      { message, updatedAt },
      {
        new: true,
        runValidators: true,
      },
    );

    return task;
  }

  public async delete(id: string): Promise<[] | null> {
    try {
      await Task.deleteOne({ _id: id });
      return [];
    } catch (err) {
      return null;
    }
  }
}
