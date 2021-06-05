import { Router } from 'express';
import taskroutes from './task-routes';

const routes = Router();

routes.use('/api/v1/tasks', taskroutes);

export default routes;
