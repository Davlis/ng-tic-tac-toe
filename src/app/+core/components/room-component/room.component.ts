import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RoomService } from '../../services';

@Component({
  selector: 'room-component',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public users: any[] = [];

  public id: string = location.hash.replace('#', '');
  public room: any = {};


  @Output()
  public onLeave: EventEmitter<any> = new EventEmitter();

  @Output()
  public onStart: EventEmitter<any> = new EventEmitter();

  constructor(private roomService: RoomService,) { }

  async ngOnInit() {
    this.room = await this.roomService.getRoom(this.id)
  }

  public setListeners(): void {
  }

  public onRoomJoined(): void {
  }

  public onRoomLeave(): void {
  }

  public startGame(): void {
    this.onStart.emit('gameStart');
  }

  public kickUser(): void {
  }

  public addUser(): void {
  }

  public popUser(): void {
  }

  public getInviteLink(): void {
    const id = location.hash;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", id.replace('#',''));
  }

  public async leave() {
    try {
      await this.roomService.leaveRoom(this.id);
      this.onLeave.emit('roomLeave');
    } catch(err) {
      console.error(err);
    }
  }

}
