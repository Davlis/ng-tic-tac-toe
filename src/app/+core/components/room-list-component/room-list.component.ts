import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoomService } from '../../services';

@Component({
  selector: 'room-list-component',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Output()
  public onBack: EventEmitter<any> = new EventEmitter();

  @Output()
  public onJoin: EventEmitter<any> = new EventEmitter();

  @Output()
  public onCreate: EventEmitter<any> = new EventEmitter();

  public rooms: any[] = [];
  public createRoomModal: boolean = false;

  public createForm: FormGroup;

  public selectedRoom: string = '';

  constructor(private formBuilder: FormBuilder,
              private roomService: RoomService,) { }

  ngOnInit() {
    this.getRooms();
  }

  public setListeners(): void {
  }

  public onAddedRoom(): void {
  }

  public onDestroyedRoom(): void {
  }

  public selectRoom(roomRef, room) {
    this.selectedRoom = room;
  }

  public async getRooms() {
    const result = await this.roomService.getRooms();
    this.rooms = result;
  }

  public back(): void {
    this.onBack.emit();
  }

  public joinRoom(): void {
    this.onJoin.emit('id');
  }

  public createRoom(): void {
    this.onCreate.emit('id');
  }
}
