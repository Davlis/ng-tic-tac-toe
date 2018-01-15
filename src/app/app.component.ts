import { Component, OnInit } from '@angular/core';
import { UserService } from './+core/services';
import { Socket } from 'ng-socket-io';

export const VIEWS = [
  'landingEnabled',
  'menuEnabled',
  'roomEnabled',
  'boardEnabled', 
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public landingEnabled: boolean = true;
  public menuEnabled: boolean = false;
  public roomEnabled: boolean = false;
  public boardEnabled: boolean = false;

  constructor(private userService: UserService,
              private socket: Socket,) {

  }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.showOnly('menuEnabled');
      this.userService.emitStoreClientId()
    }
  }

  public showLanding(): void {
  }

  public showMenu(): void {
  }

  public showRoom(id): void {
  }

  public showBoard(): void {
  }

  public dispatchViews(): void {
  }

  public back(): void {
  }

  private showOnly(view) {
    VIEWS.filter(v => {
      if (v === view) {
        this[v] = true;
      } else {
        this[v] = false;
      }
    });
  }

  public viewChangeListener($event): void {

    if ($event.includes('showRoom')) {
      const id = $event.replace('showRoom', '');
      location.hash = id;

      this.showOnly('roomEnabled');
    }

    if ($event === 'roomLeave') {
      location.hash = '';
      this.showOnly('menuEnabled');
    }

    if ($event === 'logged') {
      this.showOnly('menuEnabled');
    }

    if ($event === 'gameStart') {
      this.showOnly('boardEnabled');
    }

    if ($event === 'onLogout') {
      this.showOnly('landingEnabled');
    }
  }

}
