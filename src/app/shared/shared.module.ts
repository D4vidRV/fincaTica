import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { NuevoAnimalComponent } from './components/forms/nuevo-animal/nuevo-animal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalNumerosComponent } from './components/modal-numeros/modal-numeros.component';
import { NuevoNumeroComponent } from './components/forms/nuevo-numero/nuevo-numero.component';
import { ModalUsuariosComponent } from './components/modal-usuarios/modal-usuarios.component';
import { NuevoUsuarioComponent } from './components/forms/nuevo-usuario/nuevo-usuario.component';
import { ModalUsuariosEditarComponent } from './components/modal-usuarios-editar/modal-usuarios-editar.component';
import { EditarUsuarioComponent } from './components/forms/editar-usuario/editar-usuario.component';
import { ModalAnimalesEditarComponent } from './components/modal-animales-editar/modal-animales-editar.component';
import { EditarAnimalComponent } from './components/forms/editar-animal/editar-animal.component';
import { ModalInsumosComponent } from './components/modal-insumos/modal-insumos.component';
import { NuevoInsumoComponent } from './components/forms/nuevo-insumo/nuevo-insumo.component';
import { InsumosPorMesComponent } from './components/graphs/insumos-por-mes/insumos-por-mes.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CantidadPorGeneroComponent } from './components/graphs/cantidad-por-genero/cantidad-por-genero.component';

@NgModule({
  declarations: [
    ModalComponent,
    NuevoAnimalComponent,
    ModalNumerosComponent,
    NuevoNumeroComponent,
    ModalUsuariosComponent,
    NuevoUsuarioComponent,
    ModalUsuariosEditarComponent,
    EditarUsuarioComponent,
    ModalAnimalesEditarComponent,
    EditarAnimalComponent,
    ModalInsumosComponent,
    NuevoInsumoComponent,
    InsumosPorMesComponent,
    CantidadPorGeneroComponent,
  ],
  exports: [
    ModalComponent,
    ModalNumerosComponent,
    ModalUsuariosComponent,
    ModalInsumosComponent,
    ModalUsuariosEditarComponent,
    ModalAnimalesEditarComponent,
    InsumosPorMesComponent,
    CantidadPorGeneroComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxChartsModule],
})
export class SharedModule {}
