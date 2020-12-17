import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsChartComponent } from './analytics-chart.component';

describe('AnalyticsChartComponent', () => {
  let component: AnalyticsChartComponent;
  let fixture: ComponentFixture<AnalyticsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
