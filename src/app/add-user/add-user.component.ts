import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: string = '';
  @Output() userAdded = new EventEmitter<string>();

  addUser() {
    this.userAdded.emit(this.newUser);
    this.newUser = '';
  }
}
