// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, // перенаправление на список пользователей
  { path: 'users', component: UserListComponent }, // маршрут для списка пользователей
  { path: 'add-user', component: AddUserComponent } // маршрут для добавления пользователя
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
