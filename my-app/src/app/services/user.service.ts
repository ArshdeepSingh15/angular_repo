import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient);

  users = signal<any[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  fetchUsers() {
    this.loading.set(true);
    this.error.set(null);

    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Failed to load users');
          this.loading.set(false);
        }
      });
  }
}
