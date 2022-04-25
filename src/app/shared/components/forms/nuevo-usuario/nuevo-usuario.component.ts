import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private usuariosService: UsuariosService
  ) {}

  formularioAgregarUsuario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    apellidoMaterno: ['', Validators.required],
    user: ['', Validators.required],
    password: ['', Validators.required],
    correo: [
      '',
      [Validators.required, Validators.email],
      [this.usuariosService], //OJO cambiarlo
    ],
    rol: ['', Validators.required],
  });

  closeModal() {
    this.modalService.$modalUsuarios.emit(false);
  }

  guardar() {
    console.log(this.formularioAgregarUsuario.value);
    if (this.formularioAgregarUsuario.invalid) {
      this.formularioAgregarUsuario.markAllAsTouched();
      return;
    }
    const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      user,
      password,
      correo,
      rol,
    } = this.formularioAgregarUsuario.value;
    this.usuariosService
      .agregarUsuario(
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        user,
        password,
        correo,
        rol
      )
      .subscribe((resp) => {
        if (resp) {
          Swal.fire('Correcto', 'Registro Agregado', 'success');
          this.closeModal();
          location.reload();
        }
      });
  }

  ngOnInit(): void {}
}
