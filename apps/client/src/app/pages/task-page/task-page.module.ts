import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: TaskPageComponent,
  },
];

@NgModule({
  declarations: [TaskPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TaskPageModule {}
