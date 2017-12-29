import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsListComponentComponent } from './stats-list-component.component';

describe('StatsListComponentComponent', () => {
  let component: StatsListComponentComponent;
  let fixture: ComponentFixture<StatsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
