import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestServicesCardComponent } from './best-services-card.component';

describe('BestServicesCardComponent', () => {
  let component: BestServicesCardComponent;
  let fixture: ComponentFixture<BestServicesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestServicesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
