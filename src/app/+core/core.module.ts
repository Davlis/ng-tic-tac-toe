import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AuthService,
  DataService,
  GameService,
  RoomService,
  StatsService,
  UserService,
} from './services';

import {
  BoardComponent,
  HeaderComponent,
  LandingComponent,
  MenuComponent,
  RoomComponent,
  RoomListComponent,
  StatsListComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    DataService,
    GameService,
    RoomService,
    StatsService,
    UserService,
  ],
  declarations: [
    BoardComponent,
    HeaderComponent,
    LandingComponent,
    MenuComponent,
    RoomComponent,
    RoomListComponent,
    StatsListComponent,
  ],
  exports: [
    BoardComponent,
    HeaderComponent,
    LandingComponent,
    MenuComponent,
    RoomComponent,
    RoomListComponent,
    StatsListComponent,
  ],
})
export class CoreModule { }
