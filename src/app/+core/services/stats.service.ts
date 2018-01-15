import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class StatsService {

  constructor(private dataService: DataService,) { }

  public async getStats() {
    return await this.dataService.callHandler('GET', 'stat');
  }

  public updateStats() {
    
  }

}
