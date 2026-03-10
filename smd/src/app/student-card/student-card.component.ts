import {Component,Input,ContentChild,AfterContentInit} from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css',
})
export class StudentCardComponent implements AfterContentInit {
  @Input() student!: Student;

   ngAfterContentInit() {
    if (!this.student) {
      throw new Error('Student-Card requires student input');
    }
  }
}