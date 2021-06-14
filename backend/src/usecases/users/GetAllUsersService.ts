import { IUser } from 'src/entities/user/user';
import UsersRepository from 'src/external/repositories/mongodb/mongodb-user-repository';

class GetAllUsersService {
  public async execute(): Promise<IUser[]> {
    const usersRepository = new UsersRepository();
    const users = await usersRepository.find();

    return users;
  }
}

export default GetAllUsersService;
