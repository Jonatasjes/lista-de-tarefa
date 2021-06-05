import { Document, Model, model, Schema } from 'mongoose';

export type TUpdateTask = {
  id: string;
  message: string;
};

export interface ITask extends Document {
  message: string;
}

export const TaskSchema: Schema = new Schema({
  message: { type: String, required: [true, 'A task must have a message.'] },
});

const Task: Model<ITask> = model('Task', TaskSchema);

export default Task;
