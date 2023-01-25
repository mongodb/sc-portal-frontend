import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadListComponent } from './workload-list.component';

describe('WorkloadListComponent', () => {
  let component: WorkloadListComponent;
  let fixture: ComponentFixture<WorkloadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkloadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkloadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
