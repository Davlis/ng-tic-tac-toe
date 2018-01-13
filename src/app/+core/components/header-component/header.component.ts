import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  public onLogout: EventEmitter<any> = new EventEmitter();

  constructor(public userService: UserService,) { }

  ngOnInit() {
  }

  public emitLogout() {
    this.onLogout.emit('onLogout');
  }

  public logout() {
    this.userService.logout();
    this.emitLogout();
  }

}
