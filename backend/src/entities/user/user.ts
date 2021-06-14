import { hash } from 'bcryptjs';
import { Document, model, Model, Schema } from 'mongoose';
import validator from 'validator';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  passwordConfirm?: string | undefined;
}

export interface IUserResponse {
  user: IUser;
  token: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have a email address.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'A user must have a password.'],
    minlength: 8,
    // select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirme your password'],
    validate: {
      validator: function (el: string): boolean {
        const password: string = this.password;
        return el === password;
      },
      message: 'Password are not the same!',
    },
  },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await hash(this.password, 12);

  this.passwordConfirm = undefined;
});

const User: Model<IUser> = model('User', UserSchema);

export default User;
