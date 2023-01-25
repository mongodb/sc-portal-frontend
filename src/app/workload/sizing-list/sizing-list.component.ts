import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sizing} from "../models/sizing";
import {SizingService} from "../sizing.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Contact} from "../../champion/models/contact";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sizing-list',
  templateUrl: './sizing-list.component.html',
  styleUrls: ['./sizing-list.component.sass']
})
export class SizingListComponent implements OnInit{

  sizings?: Observable<Sizing[]>;


  searchForm = this.fb.group({
    workload_name: ['', Validators.required]
  })

  constructor(private service:SizingService, private activatedRoute: ActivatedRoute, private fb:FormBuilder) {
  }

  ngOnInit(): void {
  }


  sizingSearch(): void {
    this.sizings = this.service.getSizings();
  }

}
