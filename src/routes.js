import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import StudentController from './app/controllers/StudentController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', UserController.getAll);
routes.get('/users/:id', UserController.getById);
routes.post('/users', UserController.store);
routes.post('/login', SessionController.login);

routes.use(authMiddlewares);
routes.put('/users/:id', UserController.update);

routes.put('/students/:id', StudentController.update);
routes.post('/students', StudentController.store);
routes.get('/students', StudentController.getAll);

routes.get('/appointments', AppointmentController.getAll);
routes.post('/appointments', AppointmentController.store);

routes.get('/schedules', ScheduleController.index);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
