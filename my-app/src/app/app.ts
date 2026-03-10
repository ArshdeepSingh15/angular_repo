import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { Exercise } from './exercise/exercise';
import { UserList } from './user-list/user-list';
import { Parent } from './parent/parent';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Test,Exercise,UserList,Parent,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
