import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../../app.service";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";
import {FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../account/account.service";
import {ChampionService} from "../champion.service";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    preferredName: [''],
    email: ['',  Validators.email],
    phone: [['']],
    address: this.fb.group({
      city: [''],
      state: [''],
      nearestMajorCity: [''],
      location: []
    })

  })

  championForm = this.fb.group( {
    championType: ['', Validators.required],
    status: ['', Validators.required],
    interests: [['']],
    productInterests:[['']],
    speaker: [false, Validators.required],
    strength: [0, [Validators.max(5), Validators.min(0)]]

  })

  products: string[] = ['Atlas', 'Realm','Device Sync','Enterprise Advanced','Mobile','Online Archive','Streaming']
  interestedProducts: string[] = [];

  editMode = false;


  id: string;
  contact?: Contact
  constructor(private activatedRoute: ActivatedRoute, private service: ChampionService, private router: Router, private fb:FormBuilder) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id);
      this.service.getContact(this.id).subscribe(result => {
        if (result) {
          this.contactForm.patchValue(result);
          this.contact = result;
          if (result.champion) {
            this.championForm.patchValue(result.champion);
            this.interestedProducts.concat(result.champion.productInterests);
          }
        }
      })

    })
  }

  ngOnInit() {

  }


  saveContact(){
    if (this.contactForm.valid && this.contactForm.dirty) {
        this.championForm.controls.productInterests.setValue(this.interestedProducts);
        this.service.saveContact(this.id, this.contactForm.value);
    }
  }



  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.championForm.controls.interests.value.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(i: number): void {
    this.championForm.controls.interests.value.splice(i, 1);
  }


  hasProductInterest(product: string) {
    if (this.interestedProducts.indexOf(product) == -1 ){
      return false
    }
    return true;

  }


  toggleInterest(product: string) {
    let index = this.interestedProducts.indexOf(product);
    console.log(index);
    if (index == -1){
      this.interestedProducts.push(product);
    } else {
      this.interestedProducts.splice(index, 1);
    }
    console.log(this.interestedProducts);
  }


}
