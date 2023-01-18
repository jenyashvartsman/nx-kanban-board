import { Router } from 'express';
import controller from '../controllers/comments.controller';

const commentsRoutes = Router();

commentsRoutes
  .get('/task/:id', controller.getComments)
  .post('/', controller.createComment)
  .put('/:id', controller.editComment)
  .delete('/:id', controller.deleteComment);

export = commentsRoutes;
