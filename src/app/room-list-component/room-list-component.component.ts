import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list-component',
  templateUrl: './room-list-component.component.html',
  styleUrls: ['./room-list-component.component.css']
})
export class RoomListComponentComponent implements OnInit {

  public rooms: any[] = [];
  public createRoomModal: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
