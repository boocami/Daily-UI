import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceShopComponent } from './e-commerce-shop.component';

describe('ECommerceShopComponent', () => {
  let component: ECommerceShopComponent;
  let fixture: ComponentFixture<ECommerceShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommerceShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
