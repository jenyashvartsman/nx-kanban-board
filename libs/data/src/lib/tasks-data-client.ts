import { tasks } from './data/data';
import {
  ETaskStatus,
  ITaskChangeUserModel,
  ITaskCreateModel,
  ITaskModel,
} from './models/task';
import { now, uuid } from './util/util';

export interface TasksDataClient {
  getTasks(): ITaskModel[];
  getTask(id: string): ITaskModel | null;
  createTask(task: ITaskCreateModel): ITaskModel;
  editTask(id: string, task: ITaskModel): ITaskModel | null;
  deleteTask(id: string): ITaskModel | null;
  changeTaskUser(
    id: string,
    changeUserTask: ITaskChangeUserModel
  ): ITaskModel | null;
}

export const createTasksDataClient = (): TasksDataClient => ({
  getTasks() {
    return tasks;
  },

  getTask(id: string) {
    return tasks.find((task) => task.id === id) || null;
  },

  createTask(task: ITaskCreateModel) {
    const newTask: ITaskModel = {
      ...task,
      id: uuid(),
      createdAt: now(),
      status: ETaskStatus.TODO,
    };
    tasks.push(newTask);

    return newTask;
  },

  editTask(id: string, task: ITaskModel) {
    const editTask = this.getTask(id);

    if (editTask) {
      editTask.title = task.title;
      editTask.description = task.description;
      editTask.priority = task.priority;
      editTask.userEmail = task.userEmail;

      return editTask;
    } else {
      return null;
    }
  },

  deleteTask(id: string) {
    const deleteTaskIndex = tasks.findIndex((task) => task.id === id);

    if (deleteTaskIndex > -1) {
      const deleteTask = { ...tasks[deleteTaskIndex] };
      tasks.splice(deleteTaskIndex, 1);
      return deleteTask;
    } else {
      return null;
    }
  },

  changeTaskUser(id: string, changeUserTask: ITaskChangeUserModel) {
    const editTask = this.getTask(id);

    if (editTask) {
      editTask.userEmail = changeUserTask.userEmail;
      return editTask;
    } else {
      return null;
    }
  },
});
