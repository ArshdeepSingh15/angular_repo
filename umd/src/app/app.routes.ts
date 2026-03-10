import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then(m => m.usersRoutes)
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  { path: '**', redirectTo: '' }
];
