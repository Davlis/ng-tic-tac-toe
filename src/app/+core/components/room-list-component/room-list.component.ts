import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'room-list-component',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Output()
  public onBack: EventEmitter<any> = new EventEmitter();

  public rooms: any[] = [];
  public createRoomModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public back(): void {
    this.onBack.emit();
  }
}
