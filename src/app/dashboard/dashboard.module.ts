import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalesModule } from '../animales/animales.module';
import { NumerosModule } from '../numeros/numeros.module';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { HomeComponent } from './pages/home/home.component';
import { SubastasModule } from '../subastas/subastas.module';
import { InsumosModule } from '../insumos/insumos.module';
@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AnimalesModule,
    NumerosModule,
    UsuariosModule,
    InsumosModule,
    SharedModule,
  ],
})
export class DashboardModule {}
