import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowdfundingCampaignComponent } from './crowdfunding-campaign.component';

describe('CrowdfundingCampaignComponent', () => {
  let component: CrowdfundingCampaignComponent;
  let fixture: ComponentFixture<CrowdfundingCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowdfundingCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowdfundingCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
