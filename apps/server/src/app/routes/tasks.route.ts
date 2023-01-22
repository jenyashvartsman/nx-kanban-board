import { Router } from 'express';
import controller from '../controllers/tasks.controller';

const tasksRoutes = Router();

tasksRoutes
  .get('/', controller.getTasks)
  .get('/:id', controller.getTask)
  .post('/', controller.createTask)
  .put('/:id', controller.editTask)
  .delete('/:id', controller.deleteTask)
  .put('/:id/status/:status', controller.changeTaskStatus);

export = tasksRoutes;
