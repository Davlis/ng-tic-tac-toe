import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Socket } from 'ng-socket-io';

@Injectable()
export class GameService {

  constructor(private dataService: DataService,
              private socket: Socket,) { }

  public registerListeners() {

  }

  public async setGameState(gameId, state) {
    const endpoint = 'game/state/' + gameId;
    return (await this.dataService.callHandler('POST', endpoint, { data: {state}}));
  }

  public checkWinner() {

  }

  public checkIfValidMove() {

  }

  public async acknowledge(gameId) {
    const endpoint = 'game/acknowledge/' + gameId;
    return (await this.dataService.callHandler('GET', endpoint));
  }

}
