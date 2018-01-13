import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'room-component',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Output()
  public onLeave: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public leave(): void {
    this.onLeave.emit('roomLeave');
  }

}
