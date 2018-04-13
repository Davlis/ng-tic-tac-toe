import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from './data.service';
import { Socket } from 'ng-socket-io';

@Injectable()
export class UserService {

  constructor(private dataService: DataService,
              private localStorage: LocalStorageService,
              private socket: Socket,) { }

  public async login(loginData) {
    const result = await this.dataService.callHandler('POST', 'auth/login', { data: loginData });

    const token = result.token,
      user = result.user;

    this.localStorage.store('user', user);
    this.localStorage.store('access', token);

    this.socketInit();
  }

  public async register(registerData) {
    const result = await this.dataService.callHandler('POST', 'auth/register', { data: registerData });
  }

  public isLoggedIn() {
    return this.localStorage.retrieve('user') && this.localStorage.retrieve('access');
  }

  public setUser(userData) {
    this.localStorage.store('user', userData);
  }

  public getUser() {
    return this.localStorage.retrieve('user');
  }

  public logout() {
    this.localStorage.clear('user');
    this.localStorage.clear('access');
    this.socket.disconnect();
  }

  public socketInit() {
    this.socket.connect();
    const userId = this.getUser().id;
    this.socket.emit('storeClientId', userId);
  }

}
