import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { UserListView } from './user-list-view/user-list-view';
import { UserDetail } from './user-detail/user-detail';

export const routes: Routes = [
   
  { path: '', component: UserListView },
  { path: 'user/:id', component: UserDetail },

    {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './AppDashboard'
      }).then(m => m.AppDashboard)
  }
];
