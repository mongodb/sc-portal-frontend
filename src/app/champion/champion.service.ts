import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Champion} from "./models/champion";
import {Observable} from "rxjs";
import {Contact} from "./models/contact";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  constructor(private http:HttpClient) { }



  recentContacts(): Observable<Contact[]> {
    let query = [];
    return this.http.get<Contact[]>(environment.app_url + 'contact/recent')
  }

  contactSearch(name?: string): Observable<Contact[]> {
    return this.http.post<Contact[]>(environment.app_url + 'contact/search', {name:name})
  }

  getContact(id: string):Observable<Contact> {
    return this.http.get<Contact>(environment.app_url + 'contact/' + id)
  }

  saveContact(id: string,data: object ): void {
    this.http.post<Contact>(environment.app_url + 'addContact', {id: id, data: data}).subscribe(resp => console.log(resp));
  }

}
