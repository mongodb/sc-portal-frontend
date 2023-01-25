import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingCreateComponent } from './sizing-create.component';

describe('SizingCreateComponent', () => {
  let component: SizingCreateComponent;
  let fixture: ComponentFixture<SizingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
