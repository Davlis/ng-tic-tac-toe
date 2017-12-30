import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public onLogout: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitLogout() {
  }

  public logout() {
  }

}
