import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import Swal from 'sweetalert2';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css'],
})
export class VerUsuariosComponent implements OnInit {
  usuarios: any; //TODO: Corregir tipado
  usuarioSeleccionado: any; //TODO: Corregir tipado

  // @Output() onSelectUser: EventEmitter<any> = new EventEmitter();

  modalSwitch!: boolean;
  modalEditarSwitch!: boolean;

  constructor(
    private modalService: ModalService,
    private usuariosService: UsuariosService
  ) {}

  openModal() {
    this.modalSwitch = true;
  }

  openModalEditar(usuario: any) {
    this.modalEditarSwitch = true;

    this.usuarioSeleccionado = usuario;
  }

  eliminarUsuario(usuario: any) {
    console.log('MetodoEliminar');

    Swal.fire({
      title:
        'Desea eliminar el usuario' + ' ' + usuario.nombre.toString() + '?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuariosService
          .eliminarUsuario(usuario._id, { estado: false })
          .subscribe((resp) => {
            if (resp) {
              Swal.fire('Usuario eliminado!', '', 'success');
            }
            location.reload();
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  ngOnInit(): void {
    this.modalService.$modalUsuarios.subscribe((valor) => {
      this.modalSwitch = valor;
    });

    this.modalService.$modalUsuariosEditar.subscribe((valor) => {
      this.modalEditarSwitch = valor;
    });

    this.usuariosService.consultarUsuarios().subscribe((data) => {
      this.usuarios = data;
      console.log(this.usuarios);
    });
  }
}
