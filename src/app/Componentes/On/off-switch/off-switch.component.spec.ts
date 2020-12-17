import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffSwitchComponent } from './off-switch.component';

describe('OffSwitchComponent', () => {
  let component: OffSwitchComponent;
  let fixture: ComponentFixture<OffSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
