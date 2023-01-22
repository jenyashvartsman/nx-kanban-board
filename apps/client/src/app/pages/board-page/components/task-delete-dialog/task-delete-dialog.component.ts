import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ITaskModel } from '@nx-kanban-board/api';

@Component({
  selector: 'nx-kanban-board-task-delete-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.scss'],
})
export class TaskDeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { task: ITaskModel }) {}
}
