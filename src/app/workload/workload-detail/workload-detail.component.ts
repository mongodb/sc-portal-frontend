import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, Validators} from "@angular/forms";
import {WorkloadService} from "../workload.service";
import {ProdStatus} from "../models/prod_status";
import {Workload} from "../models/workload";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Sizing} from "../models/sizing";
import {SizingService} from "../sizing.service";
import {AccountService} from "../../account/account.service";

@Component({
  selector: 'app-workload-detail',
  templateUrl: './workload-detail.component.html',
  styleUrls: ['./workload-detail.component.sass']
})
export class WorkloadDetailComponent implements OnInit{


  workloadForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    inProduction: [false, Validators.required],
    dataStore: ['', Validators.required],
    currentHosting: ['', Validators.required],
    targetCloud: ['', Validators.required],
    workloadType: ['', Validators.required],
    org: this.fb.group({
      name:['', Validators.required],
      _id: ['',Validators.required]
    })
  });

  databases: string[] = ['MongoDB', 'RDBMS', 'Other Document DB', 'None' ]
  targetProviders: string[] = ['AWS', 'Azure', 'GCP', 'Multiple']
  hostingProviders: string[] = ['AWS', 'Azure', 'GCP', 'Multiple', 'On-Prem', 'Hybrid', 'Other']
  workloadType: string[] = ['Operation', 'Analytics','Event/Streaming', 'Hybrid','Other']
  prodStatuses: ProdStatus[] = [{key: false, text: 'Not in Production'}, {key: true, text: "In Production"}]

  id?: string;
  sizings?: Observable<Sizing[]>

  constructor( private fb: FormBuilder, private service: WorkloadService, private activatedRoute: ActivatedRoute, private sizingService: SizingService, private workloadService: WorkloadService, private accountService: AccountService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      if (this.id) {
        this.service.getWorkload(this.id).subscribe(result => {
            this.workloadForm.patchValue(result);
            console.log(result.name);
       });
      }
    });
  }

  ngOnInit(): void {
    this.sizings = this.sizingService.getSizings();

  }


  //TODO: If the ID isn't sset, then we need to do an Org search in the parent org drop down

  saveForm(): void {
    let workload: Workload;
    workload = Object.assign(workload, this.workloadForm.value);
    this.workloadService.saveWorkload(workload);
  }


}
