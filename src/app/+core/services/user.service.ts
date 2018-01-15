import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from './data.service';

@Injectable()
export class UserService {

  constructor(private dataService: DataService,
              private localStorage: LocalStorageService,) { }

  public async login(loginData) {
    const result = await this.dataService.callHandler('POST', 'auth/login', { data: loginData });

    const token = result.token,
      user = result.user;

    this.localStorage.store('user', user);
    this.localStorage.store('access', token);
  }

  public async register(registerData) {
    const result = await this.dataService.callHandler('POST', 'auth/register', { data: registerData });
  }

  public isLoggedIn() {
    return this.localStorage.retrieve('user') && this.localStorage.retrieve('access');
  }

  public setUser() {

  }

  public getUser() {

  }

  public logout() {
    
  }

}
