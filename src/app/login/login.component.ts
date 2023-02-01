import { Component } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {




  constructor(private appService: AppService, private router: Router, private fb:FormBuilder) {
  }
}
