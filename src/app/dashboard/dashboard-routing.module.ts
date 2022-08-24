import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerAnimalesComponent } from '../animales/pages/ver-animales/ver-animales.component';
import { VerInsumosComponent } from '../insumos/pages/ver-insumos/ver-insumos.component';
import { VerNumerosComponent } from '../numeros/pages/ver-numeros/ver-numeros.component';
import { VerSubastasComponent } from '../subastas/pages/ver-subastas/ver-subastas.component';
import { VerUsuariosComponent } from '../usuarios/pages/ver-usuarios/ver-usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'animales', component: VerAnimalesComponent },
      { path: 'usuarios', component: VerUsuariosComponent },
      { path: 'numeros', component: VerNumerosComponent },
      { path: 'subastas', component: VerSubastasComponent },
      { path: 'insumos', component: VerInsumosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
