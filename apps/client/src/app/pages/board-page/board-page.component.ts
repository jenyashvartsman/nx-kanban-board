import { Component, OnInit } from '@angular/core';
import { ETaskStatus, ITaskModel } from '@nx-kanban-board/api';
import { TasksService } from '../../core/api/tasks.service';

@Component({
  selector: 'nx-kanban-board-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.scss'],
})
export class BoardPageComponent implements OnInit {
  tasksTodo: ITaskModel[] = [];
  tasksOnHold: ITaskModel[] = [];
  tasksInProgress: ITaskModel[] = [];
  tasksDone: ITaskModel[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.tasksService.getTasks().subscribe((tasks) => {
      this.tasksTodo = this.mapTasksByStatus(tasks, ETaskStatus.TODO);
      this.tasksOnHold = this.mapTasksByStatus(tasks, ETaskStatus.ON_HOLD);
      this.tasksInProgress = this.mapTasksByStatus(
        tasks,
        ETaskStatus.IN_PROGRESS
      );
      this.tasksDone = this.mapTasksByStatus(tasks, ETaskStatus.DONE);
    });
  }

  mapTasksByStatus(tasks: ITaskModel[], status: ETaskStatus): ITaskModel[] {
    return tasks.filter((task) => task.status === status);
  }
}
