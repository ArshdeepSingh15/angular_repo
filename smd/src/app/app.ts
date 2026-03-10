
import {Component,signal,computed,ViewChild,
AfterViewInit,OnInit,DoCheck,OnDestroy} from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { Student } from './student.model';

@Component({
  selector: 'app-root',
  imports: [StudentCardComponent, StudentFormComponent, /*RouterOutlet*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  
  students = signal<Student[]>([]);

activeCount = computed(() =>
this.students().filter(s => s.status === 'active').length
);


@ViewChild(StudentFormComponent)
formComponent!: StudentFormComponent;

private intervalId: any;

ngOnInit() {
    this.students.set([
      { id: 1, name: 'Arshdip', grade: 'A', status: 'active' },
      { id: 2, name: 'Rahul', grade: 'B', status: 'inactive' }
    ]);
    
    this.intervalId = setInterval(() => {
      console.log('Polling students...');
    }, 5000);
}

 ngDoCheck() {
    if (this.students().length > 5) {
      console.warn('Too many students');
    }
  }

 ngAfterViewInit() {
    this.formComponent.focusNameInput();
  }

ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  
addStudent(student: Student) {
this.students.update(list => [...list, student]);
}
}
