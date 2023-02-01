import {Component, Inject, OnInit} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {OKTA_AUTH, OktaAuthStateService} from "@okta/okta-angular";
import {AuthState, OktaAuth} from "@okta/okta-auth-js";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit{

  public isAuthenticated$!: Observable<boolean>;
  constructor(private _router: Router, private _oktaStateService: OktaAuthStateService, @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth) { }

  public ngOnInit(): void {
    this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
        filter((s: AuthState) => !!s),
        map((s: AuthState) => s.isAuthenticated ?? false)
    );
  }

  public async signIn() : Promise<void> {
    await this._oktaAuth.signInWithRedirect().then(
        _ =>  {
          console.log('starting redirect')
          this._router.navigate(['/profile'])
        }
    );
  }

  public async signOut(): Promise<void> {
    await this._oktaAuth.signOut();
  }


}
