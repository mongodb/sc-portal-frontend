import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingReviewComponent } from './sizing-review.component';

describe('SizingReviewComponent', () => {
  let component: SizingReviewComponent;
  let fixture: ComponentFixture<SizingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizingReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
