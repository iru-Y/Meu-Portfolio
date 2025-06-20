import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestServicesContainerComponent } from './best-services-container.component';

describe('BestServicesContainerComponent', () => {
  let component: BestServicesContainerComponent;
  let fixture: ComponentFixture<BestServicesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestServicesContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestServicesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
