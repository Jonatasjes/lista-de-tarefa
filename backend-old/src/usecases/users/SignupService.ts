import { UserError } from 'src/entities/user/errors/UserError';
import { IUser } from 'src/entities/user/user';
import UsersRepository from 'src/external/repositories/mongodb/mongodb-user-repository';

export default class SignupService {
  public async execute({
    name,
    email,
    password,
    passwordConfirm,
  }: IUser): Promise<IUser | UserError> {
    const usersRepository = new UsersRepository();
    const fields = {
      name,
      email,
      password,
      passwordConfirm,
    };

    const hasUser = await usersRepository.findByEmail(email);

    if (hasUser)
      return new UserError('Already exists a user with the same email.', 400);

    const newUser = await usersRepository.create(fields as IUser);

    return newUser;
  }
}
