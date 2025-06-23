import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteriskComponent } from './asterisk.component';

describe('AsteriskComponent', () => {
  let component: AsteriskComponent;
  let fixture: ComponentFixture<AsteriskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsteriskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
