import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeProductComponent } from './customize-product.component';

describe('CustomizeProductComponent', () => {
  let component: CustomizeProductComponent;
  let fixture: ComponentFixture<CustomizeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
