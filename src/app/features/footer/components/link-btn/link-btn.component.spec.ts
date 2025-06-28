import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBtnComponent } from './link-btn.component';

describe('LinkBtnComponent', () => {
  let component: LinkBtnComponent;
  let fixture: ComponentFixture<LinkBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
