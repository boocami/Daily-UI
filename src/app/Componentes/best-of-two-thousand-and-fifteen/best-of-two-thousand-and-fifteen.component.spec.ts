import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfTwoThousandAndFifteenComponent } from './best-of-two-thousand-and-fifteen.component';

describe('BestOfTwoThousandAndFifteenComponent', () => {
  let component: BestOfTwoThousandAndFifteenComponent;
  let fixture: ComponentFixture<BestOfTwoThousandAndFifteenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestOfTwoThousandAndFifteenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOfTwoThousandAndFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
