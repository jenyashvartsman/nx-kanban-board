import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ETaskStatus, ITaskModel } from '@nx-kanban-board/api';
import { TasksService } from '../../core/api/tasks.service';
import { TaskDeleteDialogComponent } from './components/task-delete-dialog/task-delete-dialog.component';

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

  taskStatuses = ETaskStatus;

  constructor(private tasksService: TasksService, private dialog: MatDialog) {}

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

  updateTask(task: ITaskModel): void {
    this.tasksService.updateTasks(task.id, task.status).subscribe();
  }

  confirmDeleteTask(task: ITaskModel): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      width: '600px',
      data: {
        task,
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.tasksService.deleteTask(task.id).subscribe(() => this.getTasks());
      }
    });
  }
}
