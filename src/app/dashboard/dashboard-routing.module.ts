import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerAnimalesComponent } from '../animales/pages/ver-animales/ver-animales.component';
import { VerNumerosComponent } from '../numeros/pages/ver-numeros/ver-numeros.component';
import { VerSubastasComponent } from '../subastas/pages/ver-subastas/ver-subastas.component';
import { VerUsuariosComponent } from '../usuarios/pages/ver-usuarios/ver-usuarios.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'animales', component: VerAnimalesComponent },
      { path: 'usuarios', component: VerUsuariosComponent },
      { path: 'numeros', component: VerNumerosComponent },
      { path: 'subastas', component: VerSubastasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
