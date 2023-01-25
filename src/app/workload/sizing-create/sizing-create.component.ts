import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {ProdStatus} from "../models/prod_status";
import {ActivatedRoute, Router} from "@angular/router";
import {SizingService} from "../sizing.service";
import {MatStepper} from "@angular/material/stepper";
import {Account} from "../../account/models/account";
import {Observable} from "rxjs";
import {Workload} from "../models/workload";
import {WorkloadService} from "../workload.service";

@Component({
  selector: 'app-sizing-create',
  templateUrl: './sizing-create.component.html',
  styleUrls: ['./sizing-create.component.sass']
})
export class SizingCreateComponent implements OnInit{

  sizingResult: any = {};

  sizingForm = this.fb.group({
    account: this.fb.group({
      name:['', Validators.required],
      id:['', Validators.required]
    }),
    contact: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    }),
    dataSize: this.fb.array([this.createDataSizeSection()]),
    environments: this.fb.array([this.createEnvironmentSection()]),
    workload: this.fb.group({
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
    })
  });



  databases: string[] = ['MongoDB', 'RDBMS', 'Other Document DB', 'None' ]
  targetProviders: string[] = ['AWS', 'Azure', 'GCP', 'Multiple']
  hostingProviders: string[] = ['AWS', 'Azure', 'GCP', 'Multiple', 'On-Prem', 'Hybrid', 'Other']
  workloadType: string[] = ['Operation', 'Analytics','Event/Streaming', 'Hybrid','Other']
  prodStatuses: ProdStatus[] = [{key: false, text: 'Not in Production'}, {key: true, text: "In Production"}]

  months: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  sizing_id?: string;
  workload_id?: string;
  account?: Account;



  // @ts-ignore
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private service:SizingService, private workloadService: WorkloadService) {
    this.activatedRoute.params.subscribe(params => {
      this.sizing_id = params['sizing_id']
      this.workload_id = params['id']
      if (this.sizing_id) {
        this.sizingResult = this.service.getSizing(this.sizing_id, this.workload_id).subscribe(result => {
          if (result) {
            let size = result.dataSize.length
            while (this.sizingForm.controls.dataSize.controls.length < size) {
              this.appendDataSizeSection();
            }
            let envs = result.environments.length
            while (this.sizingForm.controls.environments.controls.length < size) {
              this.appendEnvironmentSection();
            }
            this.sizingForm.patchValue(result);
          }
        });
      }
      if (this.workload_id) {
        this.workloadService.getWorkload(this.workload_id).subscribe( result => {
          this.sizingForm.controls.workload.patchValue(result);
        })
      }

    });




  }

  ngOnInit(): void {
    if (!this.account && this.service.selectedAccount) {
        this.account = this.service.selectedAccount;
        this.sizingForm.controls.account.controls.name.setValue(this.account.name);
        this.sizingForm.controls.account.controls.id.setValue(this.account._id);
      }

    console.log(this.account);
  }



  saveForm(){
    console.log('I saved the form')

  }


  createDataSizeSection() {
    return this.fb.group({
      name: ['', Validators.required],
      recordCount: [0, [Validators.required, Validators.min(0)]],
      avgRecordSize: [0, [Validators.required, Validators.min(0)]]
    })

  }


  appendDataSizeSection() {
    let sizeArray = this.sizingForm.controls.dataSize as FormArray;
    sizeArray.push(this.createDataSizeSection());
  }

  removeDataSizeSection(i: number) {
    this.sizingForm.controls.dataSize.removeAt(i);
  }


  createEnvironmentSection() {
    return this.fb.group({
      name: ['', Validators.required],
      description: [''],
      relativeSize: [100, [Validators.required, Validators.min(0)]],
      monthNeeded: [1, [Validators.required, Validators.min(0)]]
    })

  }


  appendEnvironmentSection() {
    let sizeArray = this.sizingForm.controls.environments as FormArray;
    sizeArray.push(this.createEnvironmentSection());
  }

  removeEnvironmentSection(i: number) {
    this.sizingForm.controls.environments.removeAt(i);
  }



}
