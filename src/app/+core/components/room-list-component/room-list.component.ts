import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'room-list-component',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public rooms: any[] = [];
  public createRoomModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
