import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent {
  name = '';
  grade = '';
  status: 'active' | 'inactive' = 'active';

 @ViewChild('nameInput')
  nameInput!: ElementRef<HTMLInputElement>;

  @Output() save = new EventEmitter<Student>();

  focusNameInput() {
    this.nameInput.nativeElement.focus();
   }

  submit() {
    this.save.emit({
      id: Date.now(),
      name: this.name,
      grade: this.grade,
      status: this.status
    });

    this.name = '';
    this.grade = '';
    this.status = 'active';
  }
}