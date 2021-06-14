import { Request, Response } from 'express';
import { UserError } from 'src/entities/user/errors/UserError';
import LoginService from 'src/usecases/users/LoginService';

export default class SessionController {
  public async login(request: Request, response: Response): Promise<Response> {
    const loginService = new LoginService();
    const fields = {
      email: request.body.email,
      password: request.body.password,
    };
    const user = await loginService.execute(fields);

    const statusCode = user instanceof UserError ? user.statusCode : 201;
    return response.status(statusCode).json(user);
  }
}
