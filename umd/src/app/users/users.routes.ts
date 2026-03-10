import { Routes } from '@angular/router';
import { UsersList } from './user-list/user-list';
import { UserDetail } from './user-detail/user-detail';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersList,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: UserDetail,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./user-profile/user-profile').then(c => c.UserProfile)
      },
      {
        path: 'company',
        loadComponent: () =>
          import('./user-company/user-company').then(c => c.UserCompany)
      }
    ]
  }
];
