import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
 users: any[] = [];

  selectedUser = {
    id: null,
    name: '',
    email: '',
    role: ''
  };

  onFormSubmit(user: any) {

    if (user.id === null) {
      // ADD
      user.id = this.users.length + 1;
      this.users.push({ ...user });
    } else {
      // EDIT
      const index = this.users.findIndex(u => u.id === user.id);
      this.users[index] = { ...user };
    }

    // Reset form
    this.selectedUser = {
      id: null,
      name: '',
      email: '',
      role: ''
    };
  }

  onEdit(user: any) {
    this.selectedUser = { ...user };
  }
}