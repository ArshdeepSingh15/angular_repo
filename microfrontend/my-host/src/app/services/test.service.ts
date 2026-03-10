import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
 
export class TestService {
  private http = inject(HttpClient);
 
  fetchTestFromBff(): Observable<string> {
    return this.http.get<string>('http://localhost:3000/api/getHello' , {
      responseType: 'text' as 'json'
    });      
  }
}