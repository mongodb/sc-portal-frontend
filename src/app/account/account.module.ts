import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountDetailComponent} from "./account-detail/account-detail.component";
import {AccountService} from "./account.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AccountListComponent,
    AccountDetailComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers:[AccountService]
})
export class AccountModule { }
