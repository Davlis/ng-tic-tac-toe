import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../../services';

export const ROOM_TYPES = {
  PRIVATE: 'private',
  PUBLIC: 'public',
}

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

  public createForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]],
    type: [ROOM_TYPES.PUBLIC, [Validators.required]],
  })

  public selectedRoom: any = null;

  public ROOM_TYPES: any = ROOM_TYPES;

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
    this.onJoin.emit(this.selectedRoom.id);
  }

  public async createRoom() {
    try {
      await this.roomService.addRoom(this.createForm.value);
    } catch(err) {
      console.error(err);
    }

    this.onCreate.emit('id');
  }
}
