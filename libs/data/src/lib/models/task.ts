export interface ITaskModel {
  id: string;
  userEmail: string;
  title: string;
  description: string;
  priority: ETaskPriority;
  createdAt: Date;
  status: ETaskStatus;
}

export type ITaskCreateModel = Pick<
  ITaskModel,
  'userEmail' | 'title' | 'description' | 'priority'
>;

export type ITaskChangeUserModel = Pick<ITaskModel, 'userEmail'>;

export enum ETaskPriority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export enum ETaskStatus {
  TODO = 'Todo',
  ON_HOLD = 'On hold',
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
}
