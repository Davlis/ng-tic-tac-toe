import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public landingEnabled: boolean = true;
  public menuEnabled: boolean = false;
  public roomEnabled: boolean = false;
  public boardEnabled: boolean = false;

  public showLanding(): void {
  }

  public showMenu(): void {
  }

  public showRoom(id): void {
    location.hash = id;
    this.menuEnabled = false;
    this.roomEnabled = true;
  }

  public showBoard(): void {
  }

  public dispatchViews(): void {
  }

  public back(): void {
  }

  public viewChangeListener($event): void {

    if ($event.includes('showRoom')) {
      this.showRoom($event.replace('showRoom',''));
    }

    if ($event === 'roomLeave') {
      location.hash = '';
      this.roomEnabled = false;
      this.menuEnabled = true;
    }

    if ($event === 'logged') {
      this.landingEnabled = false;
      this.menuEnabled = true;
    }
  }

}
