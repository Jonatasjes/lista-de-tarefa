import { Document, Model, model, Schema } from 'mongoose';

export type TUpdateTask = {
  id: string;
  message: string;
  updatedAt: Date;
};

export interface ITask extends Document {
  message: string;
  createdAt: Date;
}

export const TaskSchema: Schema = new Schema({
  message: {
    type: String,
    required: [true, 'A task must have a message.'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Task: Model<ITask> = model('Task', TaskSchema);

export default Task;
