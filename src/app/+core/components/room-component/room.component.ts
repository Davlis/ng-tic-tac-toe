import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { RoomService, UserService } from '../../services';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'room-component',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy {

  public owner: any = null;
  public guest: any = null;

  public id: string = location.hash.replace('#', '').split('/')[0]
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

      this.room = await this.roomService.getRoom(this.id);
      this.owner = this.room.owner;

      if (location.hash.includes('backTo')) {
        location.hash = location.hash.replace('/backTo', '');

        console.log('backTo', this.room.guest);
        this.guest = this.room.guest;
      }

      const whoAmI = this.userService.getUser();

      if (this.owner.id !== whoAmI.id && this.room.isFull === false) {
        this.roomService.joinRoom(this.id, this.socket.ioSocket.id);
      }

      this.setListeners();
    } catch (err) {
      console.error(err);
      this.onLeave.emit('roomLeave');
    }
  }

  public setListeners(): void {
    this.socket.on('startGame', (id) => {
      location.hash += '/' + id;
      this.onStart.emit('gameStart');
    });
    this.socket.on('roomLeave', this.onRoomLeave.bind(this));
    this.socket.on('roomJoin', this.onRoomJoined.bind(this));
    this.socket.on('roomDestroy', () => this.onLeave.emit('roomLeave'));
  }

  public onRoomJoined(data): void {
    this.addUser(data);
  }

  public onRoomLeave(): void {
    console.log('on room leave');
    this.popUser();
  }

  public async startGame() {
    try {
      if (this.owner.id === this.userService.getUser().id && this.guest) {
        await this.roomService.startGame(this.id);
      }
    } catch (err) {
      console.error(err);
    }
  }

  public kickUser(): void {
  }

  public addUser(userData): void {
    this.guest = userData;
  }

  public popUser(): void {
    this.guest = null;
  }

  public getInviteLink(): void {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', this.id);
  }

  public async leave() {
    try {
      await this.roomService.leaveRoom(this.id);
      this.onLeave.emit('roomLeave');
    } catch (err) {
      console.error(err);
    }
  }

  public ngOnDestroy(): void {
    this.socket.ioSocket.removeAllListeners('roomDestroy');
    this.socket.ioSocket.removeAllListeners('roomLeave');
    this.socket.ioSocket.removeAllListeners('roomJoin');
    this.socket.ioSocket.removeAllListeners('startGame');
  }

}
