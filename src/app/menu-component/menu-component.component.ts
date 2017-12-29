import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  public roomListEnabled: boolean = false;
  public statsListEnabled: boolean = false;
  public showRoom: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public showRoomList(): void {
  }

  public showStatsList(): void {
  }

  public onBack(): void {
  }
}
