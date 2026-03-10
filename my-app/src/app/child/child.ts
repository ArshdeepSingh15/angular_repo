import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() user: any;
  @Output() formSubmit = new EventEmitter<any>();

  isEditMode() {
    return this.user.id !== null;
  }

  onSubmit() {
    this.formSubmit.emit(this.user);
  }
}


export class UserFormComponent {

  
}
