import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Workload Portal';



  constructor(private service: AppService, private cookieService: CookieService) {

        this.service.decodeToken(this.cookieService.get('auth_token'))



  }
}
