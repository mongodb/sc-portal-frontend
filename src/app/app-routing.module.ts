import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import {ProfileComponent} from "./profile/profile.component";



const routes: Routes = [
  {path: "home", component: HomeComponent},
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'profile', component: ProfileComponent, canLoad: [OktaAuthGuard] },
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
