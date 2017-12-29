import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListComponentComponent } from './room-list-component.component';

describe('RoomListComponentComponent', () => {
  let component: RoomListComponentComponent;
  let fixture: ComponentFixture<RoomListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
