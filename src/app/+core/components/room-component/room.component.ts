import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RoomService, UserService } from '../../services';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'room-component',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public owner: any = null;
  public guest: any = null;

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
      this.owner = this.room.user;

      console.log(this.socket);

      const whoAmI = this.userService.getUser()

      this.setListeners();
    } catch(err) {
      console.error(err);
      this.onLeave.emit('roomLeave');
    }
  }

  public setListeners(): void {
    this.socket.on('roomLeave', this.onRoomLeave.bind(this));
    this.socket.on('roomJoin', this.onRoomJoined.bind(this));
    this.socket.on('roomDestroy', () => {
      this.onLeave.emit('roomLeave')
    })
  }

  public onRoomJoined(data): void {
    if (data.id !== this.owner.id) {
      this.guest = data;
    }
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
    window.prompt("Copy to clipboard: Ctrl+C, Enter", this.id);
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
