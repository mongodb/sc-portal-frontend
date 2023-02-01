import {Component, OnInit} from '@angular/core';
import {filter, map, Observable} from "rxjs";
import {OktaAuthStateService} from "@okta/okta-angular";
import {AuthState} from "@okta/okta-auth-js";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit{


  public name$!: Observable<string>;


  constructor(private _oktaAuthStateService: OktaAuthStateService) { }

  public ngOnInit(): void {
    this.name$ = this._oktaAuthStateService.authState$.pipe(
        filter((authState: AuthState) => !!authState && !!authState.isAuthenticated),
        map((authState: AuthState) => authState.idToken?.claims.name ?? '')
    );

  }
}
