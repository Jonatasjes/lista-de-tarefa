import CreateUserError, { UserError } from 'src/entities/user/errors/UserError';
import User, { IUser } from 'src/entities/user/user';

export default class UsersRepository {
  public async find(): Promise<IUser[]> {
    const users = await User.find();
    return users;
  }

  public async findById(id: string): Promise<IUser | null> {
    try {
      const user = await User.findById(id);
      return user;
    } catch (err) {
      return null;
    }
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (err) {
      return null;
    }
  }

  public async create({
    name,
    email,
    password,
    passwordConfirm,
  }: IUser): Promise<IUser | UserError> {
    try {
      const newUser = await User.create({
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      });

      return newUser;
    } catch (err) {
      const error = new CreateUserError(err).signError();
      return new UserError(error.message, error.statusCode);
    }
  }
}
