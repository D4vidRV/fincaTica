import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  @Input() usuarioSeleccionado: any = {};

  formularioEditarUsuario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private usuariosService: UsuariosService
  ) {}

  // formularioEditarUsuario: FormGroup = this.fb.group({
  //   rol: [this.usuarioSeleccionado.rol.toString().trim(), Validators.required],
  // });

  editar() {
    console.log('Desde Editar');
    // const { rol } = this.formularioEditarUsuario.value;
    console.log('Valor del formulario');
    console.log(this.formularioEditarUsuario.value);
    this.usuariosService
      .editarUsuario(
        this.usuarioSeleccionado._id,
        this.formularioEditarUsuario.value
      )
      .subscribe((resp) => {
        if (resp) {
          Swal.fire('Correcto', 'Registro Editado', 'success');
          this.closeModal();
          location.reload();
        }
      });
  }

  closeModal() {
    this.modalService.$modalUsuariosEditar.emit(false);
  }

  ngOnInit(): void {
    console.log(this.usuarioSeleccionado);

    this.formularioEditarUsuario = this.fb.group({
      rol: [this.usuarioSeleccionado.rol, Validators.required],
    });
  }
}
