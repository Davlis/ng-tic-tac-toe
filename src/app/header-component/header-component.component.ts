import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  public onLogout: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitLogout() {
  }

  public logout() {
  }

}
