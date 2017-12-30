import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'stats-list-component',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.css']
})
export class StatsListComponent implements OnInit {

  public onBack: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fetchStats(): void {
  }

  public back(): void {
  }

}
