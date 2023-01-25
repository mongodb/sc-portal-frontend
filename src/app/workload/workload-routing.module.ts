import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SizingListComponent} from "./sizing-list/sizing-list.component";
import {SizingCreateComponent} from "./sizing-create/sizing-create.component";
import {SizingReviewComponent} from "./sizing-review/sizing-review.component";
import {WorkloadListComponent} from "./workload-list/workload-list.component";
import {WorkloadDetailComponent} from "./workload-detail/workload-detail.component";

const routes: Routes = [
  {path: 'new', component: SizingCreateComponent},
  {path: ':id', component: WorkloadDetailComponent},
  {path: ':id/sizing', component: SizingCreateComponent},
  {path: ':id/sizing/:sizing_id', component: SizingCreateComponent},
  {path: ':id/review', component: SizingReviewComponent},
  {path: '', component: WorkloadListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkloadRoutingModule { }
