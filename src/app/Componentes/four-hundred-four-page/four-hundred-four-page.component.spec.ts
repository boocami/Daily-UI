import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourHundredFourPageComponent } from './four-hundred-four-page.component';

describe('FourHundredFourPageComponent', () => {
  let component: FourHundredFourPageComponent;
  let fixture: ComponentFixture<FourHundredFourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourHundredFourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourHundredFourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
