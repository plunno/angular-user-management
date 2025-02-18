// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Импортируем FormsModule
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'add-user', component: AddUserComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Добавляем FormsModule в imports
    RouterModule.forRoot(routes) // Добавляем маршрутизацию
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
