import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise',
  imports: [FormsModule],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css',
})
export class Exercise {
message = signal('Hello!');
count = signal(0);
inputValue = signal({text:''});

  increment() {
    this.count.set(this.count() + 1);
  }

  updateMessage() {
    this.message.set('Learning Angular!');
  }
}
