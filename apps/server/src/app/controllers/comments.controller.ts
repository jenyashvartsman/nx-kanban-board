import { Request, Response } from 'express';
import {
  createCommentsDataClient,
  ICommentCreateModel,
  ICommentEditModel,
} from '@nx-kanban-board/data';
import { getNotFoundMessage } from '../util/util';

const commentsDataClient = createCommentsDataClient();

const getComments = (req: Request, res: Response) => {
  const commentId = req.params.id;
  const comments = commentsDataClient.getComments(commentId);
  res.json(comments);
};

const createComment = (req: Request, res: Response) => {
  const comment: ICommentCreateModel = req.body;
  const newComment = commentsDataClient.createComment(comment);
  res.json(newComment);
};

const editComment = (req: Request, res: Response) => {
  const commentId = req.params.id;
  const comment: ICommentEditModel = req.body;
  const editComment = commentsDataClient.editComment(commentId, comment);
  editComment
    ? res.json(editComment)
    : res.status(404).send(getNotFoundMessage(commentId, 'comment'));
};

const deleteComment = (req: Request, res: Response) => {
  const commentId = req.params.id;
  const deleteComment = commentsDataClient.deleteComment(commentId);
  deleteComment
    ? res.json(deleteComment)
    : res.status(404).send(getNotFoundMessage(commentId, 'commentId'));
};

export default {
  getComments,
  createComment,
  editComment,
  deleteComment,
};
