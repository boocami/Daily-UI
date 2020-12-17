import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMonitoringDashboardComponent } from './home-monitoring-dashboard.component';

describe('HomeMonitoringDashboardComponent', () => {
  let component: HomeMonitoringDashboardComponent;
  let fixture: ComponentFixture<HomeMonitoringDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMonitoringDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMonitoringDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
