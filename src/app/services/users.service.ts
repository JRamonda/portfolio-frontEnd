import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = environment.ConexionWebApiProxy + 'users/'
  }

  login(obj: User) {
    return this.httpClient.post(this.resourceUrl + 'login', obj);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue)
  }

  storeUser(user: object) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}