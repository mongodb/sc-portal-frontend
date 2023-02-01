import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Contact} from "./champion/models/contact";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private userName: string;
  private userEmail: string;

  constructor(private http: HttpClient) {}



  decodeToken(token?:string) {
    if (token) {
      var content = jwtDecode(token, {header: true})
      console.log(content)
    }
  }






}
