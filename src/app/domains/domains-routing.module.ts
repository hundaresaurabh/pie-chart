import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Domain1Component } from './domain1/domain1.component';
import { Domain2Component } from './domain2/domain2.component';
import { DomainComponent } from './domain/domain.component';

const routes: Routes = [
  {
    path:'domains',
    component:DomainComponent,
    children:[
      {
        path:'domain1',
        component:Domain1Component
      },
      {
        path:'domain2',
        component:Domain2Component
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule { }
