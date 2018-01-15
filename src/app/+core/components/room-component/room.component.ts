import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RoomService, UserService } from '../../services';
import { Socket } from 'ng-socket-io';

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

  constructor(private roomService: RoomService,
              private userService: UserService,
              private socket: Socket,) { }

  async ngOnInit() {
    try {
      this.room = await this.roomService.getRoom(this.id)
      this.socket.emit('roomJoin', this.room);
    } catch(err) {
      console.error(err);
      this.onLeave.emit('roomLeave');
    }
  }

  public setListeners(): void {
    this.socket.on('roomLeave', this.onRoomLeave);
    this.socket.on('roomJoin', this.onRoomJoined);
  }

  public onRoomJoined(socket): void {
    console.log('onRoomJoined', socket);
  }

  public onRoomLeave(socket): void {
    console.log('onRoomLeave', socket);
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
