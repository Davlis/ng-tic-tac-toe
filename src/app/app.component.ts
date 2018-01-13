import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public landingEnabled: boolean = true;
  public menuEnabled: boolean = false;
  public roomEnabled: boolean = false;
  public boardEnabled: boolean = false;

  public showLanding(): void {
  }

  public showMenu(): void {
  }

  public showRoom(id): void {
  }

  public showBoard(): void {
  }

  public dispatchViews(): void {
  }

  public back(): void {
  }

  public viewChangeListener($event): void {

    if ($event.includes('showRoom')) {
      const id = $event.replace('showRoom', '');
      location.hash = id;
      this.menuEnabled = false;
      this.roomEnabled = true;
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


    console.log($event)

    if ($event === 'gameStart') {
      this.roomEnabled = false;
      this.boardEnabled = true;
    }
  }

}
