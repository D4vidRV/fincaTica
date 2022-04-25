import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumerosRoutingModule } from './numeros-routing.module';
import { VerNumerosComponent } from './pages/ver-numeros/ver-numeros.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VerNumerosComponent],
  imports: [CommonModule, NumerosRoutingModule, SharedModule],
  exports: [VerNumerosComponent],
})
export class NumerosModule {}
