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

  public showRoom(): void {
  }

  public showBoard(): void {
  }

  public dispatchViews(): void {
  }

  public back(): void {
  }

  public viewChangeListener() {}

}
