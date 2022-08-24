import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  $modalAnimales = new EventEmitter<any>();

  $modalNumeros = new EventEmitter<any>();

  $modalUsuarios = new EventEmitter<any>();

  $modalInsumos = new EventEmitter<any>();

  $modalUsuariosEditar = new EventEmitter<any>();

  $modalAnimalesEditar = new EventEmitter<any>();

  $modalInsumosEditar = new EventEmitter<any>();
}
