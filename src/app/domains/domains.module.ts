import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomainsRoutingModule } from './domains-routing.module';
import { Domain1Component } from './domain1/domain1.component';
import { Domain2Component } from './domain2/domain2.component';
import { DomainComponent } from './domain/domain.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DomainTableComponent } from './domain-table/domain-table.component';
import { UserTableComponent } from './user-table/user-table.component'; 

@NgModule({
  declarations: [Domain1Component, Domain2Component, DomainComponent, DomainTableComponent, UserTableComponent],
  imports: [
    CommonModule,
    DomainsRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports:[
    MatSelectModule
  ]
})
export class DomainsModule { }
