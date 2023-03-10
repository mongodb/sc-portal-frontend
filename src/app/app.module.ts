import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {AppService} from "./app.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WorkloadModule} from "./workload/workload.module";
import {AccountModule} from "./account/account.module";
import {AccountRoutingModule} from "./account/account-routing.module";
import {WorkloadRoutingModule} from "./workload/workload-routing.module";
import {ChampionModule} from "./champion/champion.module";
import {ChampionRoutingModule} from "./champion/champion-routing.module";
import { LoginComponent } from './login/login.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { ProfileComponent } from './profile/profile.component';
import {ContentTypeInterceptor} from "./content-type.interceptor";



const oktaAuth = new OktaAuth({
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  clientId: '${yourClientID}',
  redirectUri: window.location.origin + '/login/callback'
});


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WorkloadModule,
    WorkloadRoutingModule,
    AccountModule,
    AccountRoutingModule,
    ChampionModule,
    ChampionRoutingModule,
    OktaAuthModule
  ],
  providers: [AppService, { provide: OKTA_CONFIG, useValue: { oktaAuth } }, { provide: HTTP_INTERCEPTORS, useClass: ContentTypeInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
