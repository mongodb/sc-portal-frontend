import {Component, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";
import {FormBuilder, Validators} from "@angular/forms";
import {AccountService} from "../../account/account.service";
import {ChampionService} from "../champion.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass']
})
export class ContactListComponent implements OnInit{

  isCollapsed: boolean[] = [];
  contacts?: Observable<Contact[]>
  searchForm = this.fb.group({
    contact_name: ['', Validators.required]
  })


  constructor(private service: ChampionService, private fb: FormBuilder) {
  }



  ngOnInit(): void {
    this.contacts = this.service.recentContacts();
  }


  contactSearch() {
    if (this.searchForm.get('contact_name')?.value)
    this.contacts = this.service.contactSearch(this.searchForm.get('contact_name').value);
  }




}
