import { UserError } from 'src/entities/user/errors/UserError';
import { IUser } from 'src/entities/user/user';
import UsersRepository from 'src/external/repositories/mongodb/mongodb-user-repository';

export default class ShowProfileService {
  public async execute(id: string): Promise<IUser | UserError | null> {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user) return new UserError('User not found.');

    return user;
  }
}
