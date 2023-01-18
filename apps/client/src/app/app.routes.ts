import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'board',
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./pages/board-page/board-page.module').then(
        (m) => m.BoardPageModule
      ),
  },
  {
    path: 'task/:id',
    loadChildren: () =>
      import('./pages/task-page/task-page.module').then(
        (m) => m.TaskPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'board',
  },
];
