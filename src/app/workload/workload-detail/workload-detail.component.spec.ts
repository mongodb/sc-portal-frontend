import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadDetailComponent } from './workload-detail.component';

describe('WorkloadDetailComponent', () => {
  let component: WorkloadDetailComponent;
  let fixture: ComponentFixture<WorkloadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkloadDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkloadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
