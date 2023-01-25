import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountDetailComponent} from "./account-detail/account-detail.component";
import {ContactListComponent} from "../champion/contact-list/contact-list.component";
import {ContactDetailComponent} from "../champion/contact-detail/contact-detail.component";


const routes: Routes = [
  {path: "", component: AccountListComponent},
  {path: ":id", component: AccountDetailComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
