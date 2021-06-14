import { Router } from 'express';
import SessionController from 'src/adapters/presentation/controllers/SessionController';

const sessionRoutes = Router();

const sessionController = new SessionController();

sessionRoutes.route('/').post(sessionController.login);

export default sessionRoutes;
