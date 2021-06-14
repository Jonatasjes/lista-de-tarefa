import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from 'src/main/config/auth';
import { UserError } from 'src/entities/user/errors/UserError';
import { IUserLogin, IUserResponse } from 'src/entities/user/user';
import UsersRepository from 'src/external/repositories/mongodb/mongodb-user-repository';

export default class LoginService {
  public async execute({
    email,
    password,
  }: IUserLogin): Promise<IUserResponse | UserError> {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByEmail(email);
    if (!user)
      return new UserError('Incorrect email/password conbination.', 401);

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed)
      return new UserError('Incorrect email/password conbination.', 401);

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
