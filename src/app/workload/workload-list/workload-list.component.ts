import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SizingService} from "../sizing.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {WorkloadService} from "../workload.service";
import {Workload} from "../models/workload";

@Component({
  selector: 'app-workload-list',
  templateUrl: './workload-list.component.html',
  styleUrls: ['./workload-list.component.sass']
})
export class WorkloadListComponent implements OnInit{

  workloads?: Observable<Workload[]>;

  isCollapsed: boolean[] = [];

  searchForm = this.fb.group({
    workload_name: ['', Validators.required]
  })


  constructor(private fb:FormBuilder, private service:WorkloadService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.workloads = this.service.recentWorkloads();
  }

  workloadSearch(): void {
    this.workloads = this.service.searchWorkloads(this.searchForm.get('workload_name').value);
  }

}
