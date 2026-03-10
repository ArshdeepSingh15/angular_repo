import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
providedIn: 'root',
})
export class UserService {
private http = inject(HttpClient);

fetchUsers(): Observable<User[]> {
return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
}
fetchUser(id: string): Observable<User> {
return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id);
}
}