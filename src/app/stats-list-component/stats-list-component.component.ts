import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stats-list-component',
  templateUrl: './stats-list-component.component.html',
  styleUrls: ['./stats-list-component.component.css']
})
export class StatsListComponentComponent implements OnInit {

  public onBack: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fetchStats(): void {
  }

  public back(): void {
  }

}
