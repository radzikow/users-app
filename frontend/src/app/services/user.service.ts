import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private token: TokenService) { }

  // Base URL
  baseUrl: string = 'http://localhost:8000/api/users';


  // -----------------------
  // Get all users
  // -----------------------
  getUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`,
      })
    }
    return this.http.get(`${this.baseUrl}/all`, httpOptions).pipe(
      map(res => res),
      catchError(err => err)
    );
  }

  // -----------------------
  // Generate users
  // -----------------------
  generateUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token.get()}`,
      })
    }
    return this.http.get(`${this.baseUrl}/generate`, httpOptions);
  }

  // -----------------------
  // Get user by id
  // -----------------------
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      map(res => res),
      catchError(err => err)
    );
  }

  // -----------------------
  // Edit user
  // -----------------------
  updateUser(user): Observable<any> {
    const body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(`${this.baseUrl}/${user.id}`, body, httpOptions).pipe(
      map(res => res),
      catchError(err => err)
    );
  }

  // -----------------------
  // Delete user
  // -----------------------
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      map(res => res),
      catchError(err => err)
    );
  }
}
