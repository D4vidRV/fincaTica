import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsumosRoutingModule } from './insumos-routing.module';
import { VerInsumosComponent } from './pages/ver-insumos/ver-insumos.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerInsumosComponent],
  imports: [
    CommonModule,
    InsumosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [VerInsumosComponent],
})
export class InsumosModule {}
