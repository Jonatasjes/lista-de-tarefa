import UserError from 'src/entities/user/errors/UserError';
import User, { IUserLogin, IUserResponse } from 'src/entities/user/user';
import AppError from 'src/main/errors/AppError';

export default class LoginService {
  public async execute({
    email,
    password,
  }: IUserLogin): Promise<IUserLogin | UserError> {
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      return user;
    } catch (err) {
      return new AppError('User not found');
    }
  }
}
