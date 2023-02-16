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
    return this.http.get<Sizing[]>(environment.app_url + '/workload/' + workload_id + '/sizing');
  }


  getSizing(id: string, workload_id: string): Observable<Sizing> {
    return this.http.get<Sizing>(environment.app_url + 'workload/' + workload_id + '/sizing/' + id);
  }

  updateSizing(id: string, update: Sizing): Observable<Sizing> {
    return this.http.post<Sizing>(environment.app_url + 'workload/' + update.workload.id + '/sizing/' + id, {id: id, update: update});
  }

  createSizing(id: string, sizing: Sizing): Observable<Sizing> {
    return this.http.post<Sizing>(environment.app_url + 'workload/' + sizing.workload.id + '/sizing', sizing);
  }

  getOrgs(name: string): Observable<Account[]> {
    return this.http.post<Account[]>(environment.app_url + 'orgs', {name: name});
  }

}
