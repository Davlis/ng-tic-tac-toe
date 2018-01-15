import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Socket } from 'ng-socket-io';

@Injectable()
export class RoomService {

  constructor(private dataService: DataService,
              private socket: Socket,) { }

  public async getRooms() {
    const rooms = await this.dataService.callHandler('GET', 'room');
    return rooms;
  }

  public async getRoom(id) {
    const endpoint = 'room/'+id;
    return (await this.dataService.callHandler('GET', endpoint));
  }

  public async addRoom(data, socketId) {
    data = Object.assign(data, {socketId: socketId})
    const result = await this.dataService.callHandler('POST', 'room', { data });
    return result;
  }

  public async joinRoom(roomId, socketId) { 
    const endpoint = 'room/join/'+roomId;
    const result = await this.dataService.callHandler('POST', endpoint, { data: { socketId } });
    return result;
  }

  public async leaveRoom(roomId) {
    return await this.dataService.callHandler('POST', 'room/leave', { data: { roomId: roomId }});
  }

  public async startGame(roomId) {
    console.log('room/start/'+roomId)
    return await this.dataService.callHandler('POST', 'room/start/'+roomId, { data : {}});
  }

  public getInvitationLink() {
  }

  public registerListeners() {
    
  }

}
