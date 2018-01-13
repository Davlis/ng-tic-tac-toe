import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public setListeners(): void {
  }

  public makeMove(): void {
  }

  public onMove(): void {
  }

  public renderMove(): void {
  }

  public canMove(): void {
  }

  public setGameState(): void {
  }

}
