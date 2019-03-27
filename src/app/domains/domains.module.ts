import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { Domain1Component } from './domain1/domain1.component';
import { Domain2Component } from './domain2/domain2.component';
import { DomainComponent } from './domain/domain.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [Domain1Component, Domain2Component, DomainComponent],
  imports: [
    CommonModule,
    DomainsRoutingModule,
    MatSelectModule
  ],
  exports:[
    MatSelectModule
  ]
})
export class DomainsModule { }
