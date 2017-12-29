import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthService {
  
  constructor(private localStorage: LocalStorageService) {
  }

  getToken() {
    const access = this.localStorage.retrieve('access');
    return (access && access.token) || '';
  }

  getExpirationDate() {
    const access = this.localStorage.retrieve('access');
    return (access && access.token) || new Date();
  }

  getPayload() {
  }

  setToken(token) {
  }

  getAuthHeader() {
    return `Bearer ${this.getToken()}`;
  }
}
