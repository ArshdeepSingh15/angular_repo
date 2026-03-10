import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

 
@Component({
  selector: 'app-user-list-view',
  imports: [RouterLink],
  templateUrl: './user-list-view.html',
  styleUrl: './user-list-view.scss'
})
export class UserListView implements OnInit, OnDestroy {
  userService = inject(UserService);
   router = inject(Router);
 
  users = signal<any[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
 
  private userSub!: Subscription;
 
  ngOnInit() {    
    this.loading.set(true);
    this.error.set(null);
    this.userSub = this.userService.fetchUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load users');
        this.loading.set(false);
      },
    });
  }
 
  ngOnDestroy(): void {
    // VERY IMPORTANT
    this.userSub.unsubscribe();
    console.log('Polling stopped');
  }
}