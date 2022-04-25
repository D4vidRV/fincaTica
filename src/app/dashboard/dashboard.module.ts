import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { AnimalesModule } from '../animales/animales.module';
import { NumerosModule } from '../numeros/numeros.module';
import { UsuariosModule } from '../usuarios/usuarios.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AnimalesModule,
    NumerosModule,
    UsuariosModule,
    SharedModule
  ]
})
export class DashboardModule { }
