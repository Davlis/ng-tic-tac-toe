import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
  }

  public back(): void {
    this.onBack.emit();
  }

  public joinRoom(): void {
    //
  }

  public createRoom(): void {

  }
}
