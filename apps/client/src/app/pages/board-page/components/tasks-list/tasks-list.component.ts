import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITaskModel } from '@nx-kanban-board/api';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'nx-kanban-board-tasks-list',
  standalone: true,
  imports: [CommonModule, DragDropModule, TaskCardComponent],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TasksListComponent {
  @Input() id = '';
  @Input() connectedToIds: string[] = [];
  @Input() title = '';
  @Input() tasks: ITaskModel[] = [];

  drop(event: CdkDragDrop<ITaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
