import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public roomListEnabled: boolean = false;
  public statsListEnabled: boolean = false;
  
  @Output()
  public showRoom: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public showRoomList(): void {
    this.roomListEnabled = true;
  }

  public showStatsList(): void {
    this.statsListEnabled = true;
  }

  public onBack(): void {
    this.roomListEnabled = this.statsListEnabled = false;
  }
}
