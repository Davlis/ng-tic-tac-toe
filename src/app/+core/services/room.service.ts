import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class RoomService {

  constructor(private dataService: DataService) { }

  public async getRooms() {
    const rooms = await this.dataService.callHandler('GET', 'room');
    return rooms;
  }

  public async getRoom(id) {
    const endpoint = 'room/'+id;
    return (await this.dataService.callHandler('GET', endpoint));
  }

  public async addRoom(data) {
    const result = await this.dataService.callHandler('POST', 'room', { data });
    return result;
  }

  public joinRoom() { 
  }

  public async leaveRoom(roomId) {
    return await this.dataService.callHandler('POST', 'room/leave', { data: { roomId: roomId }});
  }

  public getInvitationLink() {
  }

  public registerListeners() {
    
  }

}
