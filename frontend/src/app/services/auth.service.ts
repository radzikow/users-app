import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Lecturer } from '../interfaces/lecturer';
import { Administrative } from '../interfaces/administrative';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Base URL
  private baseUrl: string = 'http://localhost:8000/api/users';

  constructor(private token: TokenService, private http: HttpClient) { }

  // -----------------------
  // Register a new user
  // -----------------------
  register(user: User): Observable<Object> {
    const body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // this is required to make validation work
      })
    }
    return this.http.post(`${this.baseUrl}/register`, body, httpOptions);
  }

  // -----------------------
  // Register a lecturer
  // -----------------------
  registerLecturer(lecturer: Lecturer): Observable<Object> {
    const body = JSON.stringify(lecturer);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // this is required to make validation work
      })
    }
    return this.http.post(`${this.baseUrl}/register-lecturer`, body, httpOptions);
  }

  // -----------------------
  // Register a administrative
  // -----------------------
  registerAdministrative(administrative: Administrative): Observable<Object> {
    const body = JSON.stringify(administrative);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // this is required to make validation work
      })
    }
    return this.http.post(`${this.baseUrl}/register-administrative`, body, httpOptions);
  }

  // -----------------------
  // Login user
  // -----------------------
  login(user) {
    const body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest' // this is required to make validation work
      })
    }
    return this.http.post(`${this.baseUrl}/login`, body, httpOptions);
  }

  // -----------------------
  // Auth status
  // -----------------------
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());

  authStatus: Observable<boolean> = this.loggedIn.asObservable();

  // -----------------------
  // Change auth status
  // -----------------------
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

}
