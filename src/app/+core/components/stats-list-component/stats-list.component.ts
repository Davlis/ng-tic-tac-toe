import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StatsService } from '../../services';

@Component({
  selector: 'stats-list-component',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.css']
})
export class StatsListComponent implements OnInit {

  @Output()
  public onBack: EventEmitter<any> = new EventEmitter();

  public stats: any[] = [];

  constructor(private statsService: StatsService,) { }

  ngOnInit() {
    this.fetchStats();
  }

  public async fetchStats() {
    this.stats = await this.statsService.getStats();
  }

  public back(): void {
    this.onBack.emit();
  }

}
