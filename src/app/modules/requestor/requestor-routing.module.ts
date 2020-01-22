import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitComponent } from './components/init/init.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'requestor',
        component: InitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestorRoutingModule { }