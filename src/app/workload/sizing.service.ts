import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../account/models/account";
import {Sizing} from "./models/sizing";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SizingService {

  constructor(private http: HttpClient) { }

  selectedAccount?: Account



  getSizings(workload_id?: string): Observable<Sizing[]> {
    return this.http.get<Sizing[]>(environment.app_url + 'sizing');
  }


  getSizing(id: string, workload_id: string): Observable<Sizing> {
    return this.http.post<Sizing>(environment.app_url + 'getSizing', {id: id, workload_id: workload_id});
  }

  updateSizing(id: string, update: object): Observable<Sizing> {
    return this.http.post<Sizing>(environment.app_url + 'create', {id: id, update: update});
  }

  getOrgs(name: string): Observable<Account[]> {
    return this.http.post<Account[]>(environment.app_url + 'orgs', {name: name});
  }

}
