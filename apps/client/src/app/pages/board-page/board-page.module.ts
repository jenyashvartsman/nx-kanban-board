import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPageComponent } from './board-page.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: BoardPageComponent,
  },
];

@NgModule({
  declarations: [BoardPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BoardPageModule {}
