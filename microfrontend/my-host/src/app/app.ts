import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestService } from './services/test.service';
import { UserListView } from './user-list-view/user-list-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,UserListView],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export default class App {
  protected readonly title = signal('my-host');
  
  testService = inject(TestService);
 
  text = signal('Loading users...');
 
   ngOnInit() {
    this.testService.fetchTestFromBff().subscribe({
      next: (result) => {
        this.text.set(result);
      },
      error: (err) => {
        console.error(err);
        this.text.set('Error loading users');
      },
    });
  }
}
