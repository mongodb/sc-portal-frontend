import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sizing} from "./models/sizing";
import {Observable} from "rxjs";
import {Workload} from "./models/workload";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WorkloadService {

  constructor(private http: HttpClient) { }

  getWorkload(id: string): Observable<Workload> {
    return this.http.post<Workload>(environment.app_url + 'workload', {id: id});
  }

  recentWorkloads(): Observable<Workload[]> {
    return this.http.post<Workload[]>(environment.app_url + 'workload/recent', {});
  }

  saveWorkload(workload: Workload) {
    return this.http.post<Workload>(environment.app_url + '/workload', {workload})
  }

  searchWorkloads(name: string): Observable<Workload[]> {
    /*let query = [];
    query = [{"$match": {}},{"$sort": {"lastUpdate":-1}},{"$limit": 50}];
    if (name) {
      query[0] = {
            "$search": {
              "index": "default",
              "text": {
                "query": name,
                "path": ["name", "org.name"],
              }
            }
      }
    }
    console.log(query);*/
    return this.http.post<Workload[]>(environment.app_url + 'workload/search', {name: name});
  }

}
