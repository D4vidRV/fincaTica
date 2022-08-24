import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalesService } from 'src/app/animales/services/animales.service';
import { InsumosService } from 'src/app/insumos/services/insumos.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-insumo',
  templateUrl: './nuevo-insumo.component.html',
  styleUrls: ['./nuevo-insumo.component.css'],
})
export class NuevoInsumoComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private insumosService: InsumosService,
    private animalesService: AnimalesService
  ) {}

  formularioAgregarInsumo: FormGroup = this.fb.group({
    animal: ['', Validators.required],
    monto: ['', Validators.required],
    descripcion: ['', Validators.required],
  });

  // Llenar selectores
  animales: any;

  ngOnInit(): void {
    this.animalesService.consultarAnimalesSinSalida().subscribe((data) => {
      this.animales = data;
    });
  }

  closeModal() {
    this.modalService.$modalInsumos.emit(false);
  }

  guardar() {
    console.log(this.formularioAgregarInsumo.value);
    if (this.formularioAgregarInsumo.invalid) {
      this.formularioAgregarInsumo.markAllAsTouched();
      return;
    }

    const { animal, monto, descripcion } = this.formularioAgregarInsumo.value;
    const fecha_registro = Date();

    this.insumosService
      .agregarInsumo(animal, monto, descripcion, fecha_registro)
      .subscribe((resp) => {
        if (resp) {
          Swal.fire('Correcto', 'Registro Agregado', 'success');
          // console.log(`FECHA DE JS: ${fecha_registro}`);
          
          this.closeModal();
          location.reload();
          // this.router.navigate(['/dashboard']);
        }
      });

    // this.closeModal();
    // location.reload();
  }
}
