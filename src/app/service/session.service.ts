import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { LoginResponse, UserLogin, UserSignUp } from '../models/session-model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  login(user: UserLogin): Observable<LoginResponse>{
    const httpHeader = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, user, httpHeader).pipe(take(1))
  }
  signUp(user: UserSignUp): Observable<LoginResponse>{
    const httpHeader = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return this.http.post<LoginResponse>(`${this.baseUrl}/users/createUser`, user, httpHeader).pipe(take(1))
  }
}
