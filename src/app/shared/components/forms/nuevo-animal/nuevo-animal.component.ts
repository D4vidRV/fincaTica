import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalesService } from 'src/app/animales/services/animales.service';
import { ColoresService } from 'src/app/colores/services/colores.service';
import { NumerosService } from 'src/app/numeros/services/numeros.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-animal',
  templateUrl: './nuevo-animal.component.html',
  styleUrls: ['./nuevo-animal.component.css'],
})
export class NuevoAnimalComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private numerosService: NumerosService,
    private animalesService: AnimalesService,
    private coloresService: ColoresService
  ) {}

  formularioAgregarAnimal: FormGroup = this.fb.group({
    numero: ['', Validators.required],
    color: ['', [Validators.required]],
    genero: ['', [Validators.required]],
    fecha_entrada: ['', [Validators.required]],
    peso_entrada: [0, [Validators.required, Validators.min(0)]],
    precio_entrada: [0, [Validators.required, Validators.min(0)]],
  });

  // Llenar selectores
  numeros: any;
  colores: any;

  ngOnInit(): void {
    this.numerosService.consultarNumerosActivos().subscribe((data) => {
      this.numeros = data;
    });

    this.coloresService.consultarColores().subscribe((data) => {
      this.colores = data;
    });
  }

  closeModal() {
    this.modalService.$modalAnimales.emit(false);
  }

  ocuparNumero(numero: any) {
    // console.log(numero);
    this.numerosService
      .editarNumero(numero, { estado: false })
      .subscribe((resp) => {
        console.log('Numero ocupado con exito!');
      });
  }

  guardar() {
    if (this.formularioAgregarAnimal.invalid) {
      this.formularioAgregarAnimal.markAllAsTouched();
      return;
    }
    // Servicio para guardar animal
    console.log(this.formularioAgregarAnimal.value);
    const {
      numero,
      color,
      genero,
      fecha_entrada,
      peso_entrada,
      precio_entrada,
    } = this.formularioAgregarAnimal.value;
    const num = numero.toString();
    this.animalesService
      .agregarAnimal(
        numero,
        color,
        genero,
        fecha_entrada,
        peso_entrada,
        precio_entrada
      )
      .subscribe((resp) => {
        if (resp) {
          Swal.fire('Correcto', 'Registro Agregado', 'success');
          this.closeModal();
          location.reload();
          // this.router.navigate(['/dashboard']);
        }
      });
    console.log('Desde guardar()');
    console.log(num);

    this.ocuparNumero(num);
  }
}
