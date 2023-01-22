import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPageComponent } from './board-page.component';
import { Route, RouterModule } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Route[] = [
  {
    path: '',
    component: BoardPageComponent,
  },
];

@NgModule({
  declarations: [BoardPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TasksListComponent,
    MatDialogModule,
  ],
})
export class BoardPageModule {}
