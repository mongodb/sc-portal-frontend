import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingListComponent } from './sizing-list.component';

describe('SizingListComponent', () => {
  let component: SizingListComponent;
  let fixture: ComponentFixture<SizingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
