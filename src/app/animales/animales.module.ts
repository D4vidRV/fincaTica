import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { VerAnimalesComponent } from './pages/ver-animales/ver-animales.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [VerAnimalesComponent],
  exports: [VerAnimalesComponent],
  imports: [CommonModule, AnimalesRoutingModule, PrimeNgModule, SharedModule],
})
export class AnimalesModule {}
