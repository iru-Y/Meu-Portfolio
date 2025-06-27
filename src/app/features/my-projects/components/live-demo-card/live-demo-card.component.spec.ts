import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDemoCardComponent } from './live-demo-card.component';

describe('LiveDemoCardComponent', () => {
  let component: LiveDemoCardComponent;
  let fixture: ComponentFixture<LiveDemoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveDemoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDemoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
