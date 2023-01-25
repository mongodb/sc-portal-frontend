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
    query = [{"$sort": {"lastContacted": -1}}, {"$limit": 50}];
    return this.http.post<Contact[]>(environment.app_url + 'getContacts', {query: query})
  }

  contactSearch(name?: string): Observable<Contact[]> {
    let query = [];
    query = [{
      "$search": {
        "text": {
          "query":name,
          "path": ["fullName","email","account.name"]
        }
      }
    },{"$sort": {"lastContacted": -1}}];

    return this.http.post<Contact[]>(environment.app_url + 'getContacts', {query:query})
  }

  getContact(id: string):Observable<Contact> {
    return this.http.post<Contact>(environment.app_url + 'getContact', {id: id})
  }

  saveContact(id: string,data: object ): void {
    this.http.post<Contact>(environment.app_url + 'addContact', {id: id, data: data}).subscribe(resp => console.log(resp));
  }

}
