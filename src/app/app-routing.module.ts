import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountListComponent} from "./account/account-list/account-list.component";
import {AccountDetailComponent} from "./account/account-detail/account-detail.component";
import {ContactDetailComponent} from "./champion/contact-detail/contact-detail.component";
import {ContactListComponent} from "./champion/contact-list/contact-list.component";


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {
    path: 'account',
    loadChildren: () => import('./account/account-routing.module').then(m => m.AccountRoutingModule)
  },
  {
  path: 'workload',
  loadChildren: () => import('./workload/workload-routing.module').then(m => m.WorkloadRoutingModule)
  },
  {
    path: 'champion',
    loadChildren: () => import('./champion/champion-routing.module').then(m => m.ChampionRoutingModule)
  },
  {path: "**", redirectTo: "home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
