import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubastasRoutingModule } from './subastas-routing.module';
import { VerSubastasComponent } from './pages/ver-subastas/ver-subastas.component';


@NgModule({
  declarations: [
    VerSubastasComponent
  ],
  imports: [
    CommonModule,
    SubastasRoutingModule
  ]
})
export class SubastasModule { }
