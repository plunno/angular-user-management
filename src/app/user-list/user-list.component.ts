import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: string[] = ['User1', 'User2', 'User3'];

  addUser(user: string) {
    this.users.push(user);
  }
}
