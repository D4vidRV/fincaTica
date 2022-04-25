import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-usuarios-editar',
  templateUrl: './modal-usuarios-editar.component.html',
  styleUrls: ['./modal-usuarios-editar.component.css'],
})
export class ModalUsuariosEditarComponent implements OnInit {
  @Input() usuario: any = {};

  constructor() {}

  ngOnInit(): void {
    // console.log(this.usuario);
  }

  // cargarUsuario(usuario: any) {}
}
