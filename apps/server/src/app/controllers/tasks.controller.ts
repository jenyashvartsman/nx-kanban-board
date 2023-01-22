import { Request, Response } from 'express';
import { createTasksDataClient } from '@nx-kanban-board/data';
import {
  ETaskStatus,
  ITaskCreateModel,
  ITaskEditModel,
} from '@nx-kanban-board/api';
import { getNotFoundMessage } from '../util/util';

const tasksDataClient = createTasksDataClient();

const getTasks = (req: Request, res: Response) => {
  const tasks = tasksDataClient.getTasks();
  res.json(tasks);
};

const getTask = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const task = tasksDataClient.getTask(taskId);
  task
    ? res.json(task)
    : res.status(404).send(getNotFoundMessage(taskId, 'task'));
};

const createTask = (req: Request, res: Response) => {
  const task: ITaskCreateModel = req.body;
  const newTask = tasksDataClient.createTask(task);
  res.json(newTask);
};

const editTask = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const task: ITaskEditModel = req.body;
  const editTask = tasksDataClient.editTask(taskId, task);
  editTask
    ? res.json(editTask)
    : res.status(404).send(getNotFoundMessage(taskId, 'task'));
};

const deleteTask = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const deleteTask = tasksDataClient.deleteTask(taskId);
  deleteTask
    ? res.json(deleteTask)
    : res.status(404).send(getNotFoundMessage(taskId, 'task'));
};

const changeTaskStatus = (req: Request, res: Response) => {
  const taskId = req.params.id;
  const taskStatus: ETaskStatus = <ETaskStatus>req.params.status;
  const changeTaskStatus = tasksDataClient.changeTaskStatus(taskId, taskStatus);
  changeTaskStatus
    ? res.json(changeTaskStatus)
    : res.status(404).send(getNotFoundMessage(taskId, 'task'));
};

export default {
  getTasks,
  getTask,
  createTask,
  editTask,
  deleteTask,
  changeTaskStatus,
};
