import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumerosService } from 'src/app/numeros/services/numeros.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ValidarNumeroService } from 'src/app/shared/services/validar-numero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-numero',
  templateUrl: './nuevo-numero.component.html',
  styleUrls: ['./nuevo-numero.component.css'],
})
export class NuevoNumeroComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private numerosService: NumerosService,
    private numeroValidator: ValidarNumeroService
  ) {}

  formularioAgregarNumero: FormGroup = this.fb.group({
    num: ['', [Validators.required, Validators.min(1)], [this.numeroValidator]],
  });

  ngOnInit(): void {}

  closeModal() {
    this.modalService.$modalNumeros.emit(false);
  }

  guardar() {
    // Servicio para guardar numero
    console.log(this.formularioAgregarNumero.value);
    if (this.formularioAgregarNumero.invalid) {
      this.formularioAgregarNumero.markAllAsTouched();
      return;
    }
    const { num } = this.formularioAgregarNumero.value;
    this.numerosService.agregarNumero(num).subscribe((resp) => {
      if (resp) {
        Swal.fire('Correcto', 'Registro Agregado', 'success');
        this.closeModal();
        location.reload();
      }
    });
  }
}
