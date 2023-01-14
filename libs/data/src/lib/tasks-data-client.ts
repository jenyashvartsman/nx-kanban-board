import { tasks } from './data/data';
import { ITaskModel } from './models/task';

export interface TasksDataClient {
  getTasks(): ITaskModel[];
}

export const createTasksDataClient = (): TasksDataClient => ({
  getTasks() {
    return tasks;
  },
});
