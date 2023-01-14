export interface ITaskCommentModel {
  id: string;
  userEmail: string;
  taskId: string;
  comment: string;
  createdAt: Date;
}

export type ITaskCommentCreateModel = Pick<
  ITaskCommentModel,
  'userEmail' | 'taskId' | 'comment'
>;
