import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReceiptComponent } from './email-receipt.component';

describe('EmailReceiptComponent', () => {
  let component: EmailReceiptComponent;
  let fixture: ComponentFixture<EmailReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
