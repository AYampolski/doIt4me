import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitComponent } from './components/init/init.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CanDeactivateRequestorAuctionService } from '@services-cust/guards/can-deactivate-requestor-auction.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InitComponent,
        canDeactivate: [CanDeactivateRequestorAuctionService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, FormsModule],
  exports: [RouterModule]
})
export class RequestorRoutingModule { }
