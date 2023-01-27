import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkloadRoutingModule} from "./workload-routing.module";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SizingService} from "./sizing.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LayoutModule} from "@angular/cdk/layout";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatRadioModule} from "@angular/material/radio";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SizingCreateComponent} from "./sizing-create/sizing-create.component";
import {SizingListComponent} from "./sizing-list/sizing-list.component";
import {SizingReviewComponent} from "./sizing-review/sizing-review.component";
import { WorkloadListComponent } from './workload-list/workload-list.component';
import { WorkloadDetailComponent } from './workload-detail/workload-detail.component';
import {AccountModule} from "../account/account.module";
import {WorkloadService} from "./workload.service";



@NgModule({
  declarations: [
    SizingCreateComponent,
    SizingListComponent,
    SizingReviewComponent,
    WorkloadListComponent,
    WorkloadDetailComponent
  ],
  imports: [
    CommonModule,
    WorkloadRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    AccountModule
  ],
  providers:[SizingService, WorkloadService]
})
export class WorkloadModule { }
