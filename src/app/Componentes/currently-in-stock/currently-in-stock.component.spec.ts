import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentlyInStockComponent } from './currently-in-stock.component';

describe('CurrentlyInStockComponent', () => {
  let component: CurrentlyInStockComponent;
  let fixture: ComponentFixture<CurrentlyInStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentlyInStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentlyInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
