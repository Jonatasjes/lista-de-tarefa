import { Request, Response } from 'express';
import { UserError } from 'src/entities/user/errors/UserError';
import GetAllUsersService from 'src/usecases/users/GetAllUsersService';
import ShowProfileService from 'src/usecases/users/ShowProfileService';
import SignupService from 'src/usecases/users/SignupService';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const getAllUsersService = new GetAllUsersService();

    const users = await getAllUsersService.execute();

    return response.status(200).json(users);
  }

  public async signup(request: Request, response: Response): Promise<Response> {
    const signupService = new SignupService();

    const user = await signupService.execute(request.body);

    const statusCode = user instanceof UserError ? user.statusCode : 201;
    return response.status(statusCode).json(user);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showProfileService = new ShowProfileService();

    const user = await showProfileService.execute(request.params.id);

    const statusCode = user instanceof UserError ? user.statusCode : 200;

    return response.status(statusCode).json(user);
  }
}
