import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  fetchUser(): Observable<User[]> {
   
    return from(
     
      fetch('https://jsonplaceholder.typicode.com/users', {
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json() as Promise<User[]>;
      }),
    );
  }
}
