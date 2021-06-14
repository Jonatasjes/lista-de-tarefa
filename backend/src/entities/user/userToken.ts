import { Document, Schema } from 'mongoose';

export interface IUserToken extends Document {
  token: string;
  user_id: string;
}

export const UserTokenSchema: Schema<> = new Schema({});
