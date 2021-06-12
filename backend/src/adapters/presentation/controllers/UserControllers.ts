import { Request, Response } from 'express';
import { UserError } from 'src/entities/user/errors/UserError';
import ShowProfileService from 'src/usecases/users/ShowProfileService';
import SignupService from 'src/usecases/users/SignupService';

export default class UserController {
  public async signup(request: Request, response: Response): Promise<Response> {
    const signupService = new SignupService();

    const userResp = await signupService.execute(request.body);

    const statusCode =
      userResp instanceof UserError ? userResp.statusCode : 201;
    return response.status(statusCode).json(userResp);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showProfileService = new ShowProfileService();

    const user = await showProfileService.execute(request.params.id);

    const statusCode = user instanceof UserError ? user.statusCode : 200;

    return response.status(statusCode).json(user);
  }
}
