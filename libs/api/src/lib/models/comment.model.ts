export interface ICommentModel {
  id: string;
  userEmail: string;
  taskId: string;
  comment: string;
  createdAt: Date;
}

export type ICommentCreateModel = Pick<
  ICommentModel,
  'userEmail' | 'taskId' | 'comment'
>;

export type ICommentEditModel = Pick<ICommentModel, 'comment'>;
