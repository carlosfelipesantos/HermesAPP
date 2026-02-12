import { Routes } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'freights',
        loadComponent: () =>
          import('./features/freights-list/freights-list.component').then(m => m.FreightsListComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
