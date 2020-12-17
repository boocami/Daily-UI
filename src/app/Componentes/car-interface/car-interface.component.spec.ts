import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInterfaceComponent } from './car-interface.component';

describe('CarInterfaceComponent', () => {
  let component: CarInterfaceComponent;
  let fixture: ComponentFixture<CarInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
