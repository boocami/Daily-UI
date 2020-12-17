import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutOfTheDayComponent } from './workout-of-the-day.component';

describe('WorkoutOfTheDayComponent', () => {
  let component: WorkoutOfTheDayComponent;
  let fixture: ComponentFixture<WorkoutOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
