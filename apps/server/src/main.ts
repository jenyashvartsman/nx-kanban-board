import * as express from 'express';
import * as path from 'path';
import { createTasksDataClient } from '@nx-kanban-board/data';

const tasksDataClient = createTasksDataClient();

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.json(tasksDataClient.getTasks());
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
