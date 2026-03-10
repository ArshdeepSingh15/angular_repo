import { Routes } from '@angular/router';
export const routes: Routes = [
{
path: 'user-list',
loadComponent: () => import("./user-list/user-list").then(m => m.UserList)
},
{
path: '',
redirectTo:"",
pathMatch: 'full'
}
];
