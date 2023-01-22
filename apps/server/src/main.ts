import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import tasksRoutes = require('./app/routes/tasks.route');
import commentsRoutes = require('./app/routes/comments.route');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// api routes
app.use('/api/tasks', tasksRoutes);
app.use('/api/comments', commentsRoutes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
