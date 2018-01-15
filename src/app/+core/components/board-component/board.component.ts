import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'board-component',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public user1Moves: any[] = [];
  public user2Moves: any[] = [];

  @Output()
  public onGameEnd: EventEmitter<any> = new EventEmitter();

  constructor(private socket: Socket,) { }

  ngOnInit() {
    console.log(this.socket.ioSocket)
  }

  public setListeners(): void {
  }

  public makeMove(): void {
  }

  public onMove(): void {
  }

  public renderMove(x, y): void {

    const boardRows = document.getElementsByClassName('board-row');

    let square = boardRows[x].firstElementChild;

    for (let i = 0; i < 3; ++i) {

      if (square.attributes['data-index'].value === ""+y) {
        square['innerHTML'] = 'X';
        break;
      }
      square = square.nextElementSibling;
    }
  }

  public canMove(): void {
  }

  public setGameState(): void {
  }

  private createRange(i): number[] {
    const arr = []

    while(i--) { 
      arr.push(i); 
    }

    return arr;
  }

}
