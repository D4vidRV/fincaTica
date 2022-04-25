import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { VerUsuariosComponent } from './pages/ver-usuarios/ver-usuarios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VerUsuariosComponent],
  imports: [CommonModule, UsuariosRoutingModule, SharedModule],
  exports: [VerUsuariosComponent],
})
export class UsuariosModule {}
