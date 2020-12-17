import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedForYouComponent } from './curated-for-you.component';

describe('CuratedForYouComponent', () => {
  let component: CuratedForYouComponent;
  let fixture: ComponentFixture<CuratedForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratedForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
