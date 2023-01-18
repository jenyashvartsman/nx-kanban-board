import { comments } from '../data/data';
import {
  ICommentCreateModel,
  ICommentEditModel,
  ICommentModel,
} from '../models/comments.model';
import { now, uuid } from '../util/util';

export interface CommentsDataClient {
  getComment(id: string): ICommentModel | null;
  getComments(taskId: string): ICommentModel[];
  createComment(comment: ICommentCreateModel): ICommentModel;
  editComment(id: string, comment: ICommentEditModel): ICommentModel | null;
  deleteComment(id: string): ICommentModel | null;
}

export const createCommentsDataClient = (): CommentsDataClient => ({
  getComment(id: string) {
    return comments.find((comment) => comment.id === id) || null;
  },

  getComments(taskId: string) {
    return comments.filter((comment) => comment.taskId === taskId);
  },

  createComment(comment: ICommentCreateModel) {
    const newComment: ICommentModel = {
      ...comment,
      id: uuid(),
      createdAt: now(),
    };
    comments.push(newComment);
    return newComment;
  },

  editComment(id: string, comment: ICommentEditModel) {
    const editComment = this.getComment(id);

    if (editComment) {
      editComment.comment = comment.comment;
      return editComment;
    } else {
      return null;
    }
  },

  deleteComment(id: string) {
    const deleteCommentIndex = comments.findIndex(
      (comment) => comment.id === id
    );

    if (deleteCommentIndex > -1) {
      const deleteComment = { ...comments[deleteCommentIndex] };
      comments.splice(deleteCommentIndex, 1);
      return deleteComment;
    } else {
      return null;
    }
  },
});
