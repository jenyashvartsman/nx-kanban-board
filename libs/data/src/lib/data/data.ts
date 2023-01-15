import { ITaskCommentModel } from '../models/comment';
import { ETaskPriority, ETaskStatus, ITaskModel } from '../models/task';
import { IUserModel } from '../models/user';
import { now, uuid } from '../util/util';

export const users: IUserModel[] = [
  { email: 'admin@email.com', password: 'admin' },
  { email: 'user1@email.com', password: 'user1' },
  { email: 'user2@email.com', password: 'user2' },
];

export const tasks: ITaskModel[] = [
  {
    id: uuid(),
    userEmail: users[0].email,
    title: 'Init project',
    description: 'Create project and server/client apps',
    priority: ETaskPriority.HIGH,
    createdAt: now(),
    status: ETaskStatus.DONE,
  },
  {
    id: uuid(),
    userEmail: users[1].email,
    title: 'Implement server app',
    description: 'Create rest APIs to handle login, tasks and comments',
    priority: ETaskPriority.MEDIUM,
    createdAt: now(),
    status: ETaskStatus.TODO,
  },
  {
    id: uuid(),
    userEmail: users[2].email,
    title: 'Implement client app',
    description: 'Create GUI to handle login, tasks and comments',
    priority: ETaskPriority.MEDIUM,
    createdAt: now(),
    status: ETaskStatus.TODO,
  },
];

export const comments: ITaskCommentModel[] = [
  {
    id: uuid(),
    taskId: tasks[0].id,
    userEmail: users[0].email,
    comment: 'Created server node express app',
    createdAt: now(),
  },
  {
    id: uuid(),
    taskId: tasks[0].id,
    userEmail: users[0].email,
    comment: 'Created client angular app',
    createdAt: now(),
  },
];
