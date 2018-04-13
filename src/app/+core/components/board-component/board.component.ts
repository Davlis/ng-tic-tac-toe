import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { RoomService, GameService } from '../../services';
import { Socket } from 'ng-socket-io';

export const ICONS = {
  OWNER: 'X',
  GUEST: 'O',
}

export const defaultState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  current: Array(9).fill(null),
  xIsNext: true,
  stepNumber: 0,
  canMove: false,
}

@Component({
  selector: 'board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {

  public user1Moves: any[] = [];
  public user2Moves: any[] = [];

  public who: any
  public state: any = JSON.parse(JSON.stringify(defaultState));

  @Output()
  public onGameEnd: EventEmitter<any> = new EventEmitter();

  public gameId: string = location.hash.replace('#', '').split('/')[1];
  public roomId: string = location.hash.replace('#', '').split('/')[0];

  constructor(private socket: Socket,
              private roomService: RoomService,
              private gameService: GameService,) {
  }

  async ngOnInit() {
    this.setListeners();
    await this.gameService.acknowledge(this.gameId);
  }

  public setListeners(): void {
    this.socket.on('playerMove', () => {
      this.state.canMove = true;
    })

    this.socket.on('newState', (state) => {
      this.state = state;
    })

    this.socket.on('gameLeft', () => {

    })

    this.socket.on('gameWin', () => {alert('You won.'); this.onGameEndEmit();});
    this.socket.on('gameLose', () => {alert('You lost.'); this.onGameEndEmit();});
    this.socket.on('gameDraw', () => {alert('Draw.'); this.onGameEndEmit();});
  }

  public onGameEndEmit() {
    this.onGameEnd.emit(this.roomId)
  }

  public makeMove(): void {
  }

  public onMove(): void {
  }

  public renderMove(i): void {

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if(!this.state.canMove || this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const state = {
      history: history.concat([{
        squares: squares,
      }]),
      current: squares,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      canMove: false
    }

    this.setGameState(state);
  }

  public canMove() {
    return this.state.canMove;
  }

  public setGameState(state): void {
    this.state = state;
    this.gameService.setGameState(this.gameId, this.state)
  }

  private createRange(i): number[] {
    const arr = []

    while(i--) { 
      arr.push(i); 
    }

    return arr;
  }

  private calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0; i < lines.length; ++i) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  ngOnDestroy() {
    this.socket.ioSocket.removeAllListeners('playerMove');
    this.socket.ioSocket.removeAllListeners('newState');
    this.socket.ioSocket.removeAllListeners('gameLeft');
  }

}
