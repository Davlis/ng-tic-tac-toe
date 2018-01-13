import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'room-component',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public users: any[] = [];

  @Output()
  public onLeave: EventEmitter<any> = new EventEmitter();

  @Output()
  public onStart: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public setListeners(): void {
  }

  public onRoomJoined(): void {
  }

  public onRoomLeave(): void {
  }

  public startGame(): void {
  }

  public kickUser(): void {
  }

  public addUser(): void {
  }

  public popUser(): void {
  }

  public getInviteLink(): void {
  }

  public leave(): void {
    this.onLeave.emit('roomLeave');
  }

}
