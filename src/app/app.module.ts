import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { RoomComponentComponent } from './room-component/room-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { StatsListComponentComponent } from './stats-list-component/stats-list-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { RoomListComponentComponent } from './room-list-component/room-list-component.component';
import { BoardComponentComponent } from './board-component/board-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponentComponent,
    RoomComponentComponent,
    HeaderComponentComponent,
    StatsListComponentComponent,
    MenuComponentComponent,
    RoomListComponentComponent,
    BoardComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
