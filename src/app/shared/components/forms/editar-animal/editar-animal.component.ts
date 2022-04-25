import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AnimalesService } from 'src/app/animales/services/animales.service';
import { ColoresService } from 'src/app/colores/services/colores.service';
import { NumerosService } from 'src/app/numeros/services/numeros.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-animal',
  templateUrl: './editar-animal.component.html',
  styleUrls: ['./editar-animal.component.css'],
})
export class EditarAnimalComponent implements OnInit {
  @Input() animalSeleccionado: any = {};

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private numerosService: NumerosService,
    private animalesService: AnimalesService,
    private coloresService: ColoresService
  ) {}

  formularioEditarAnimal!: FormGroup;

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

    this.formularioEditarAnimal = this.fb.group({
      numero: [this.animalSeleccionado.numero._id, Validators.required],
      color: [this.animalSeleccionado.color._id, Validators.required],
      genero: [this.animalSeleccionado.genero, Validators.required],
      fecha_entrada: [
        this.animalSeleccionado.fecha_entrada,
        Validators.required,
      ],
      peso_entrada: [
        this.animalSeleccionado.peso_entrada,
        [Validators.required, Validators.min(0)],
      ],
      precio_entrada: [
        this.animalSeleccionado.precio_entrada,
        [Validators.required, Validators.min(0)],
      ],
      fecha_salida: [this.animalSeleccionado.fecha_salida, Validators.required],
      peso_salida: [
        this.animalSeleccionado.peso_salida,
        [Validators.required, Validators.min(0)],
      ],
      precio_salida: [
        this.animalSeleccionado.precio_salida,
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  closeModal() {
    this.modalService.$modalAnimalesEditar.emit(false);
  }

  desocuparNumero(numero: any) {
    // console.log(numero);
    this.numerosService
      .editarNumero(numero, { estado: true })
      .subscribe((resp) => {
        console.log('Numero ocupado con exito!');
      });
  }

  editar() {
    console.log(this.formularioEditarAnimal.value);

    if (this.formularioEditarAnimal.invalid) {
      return;
    }
    const { numero } = this.formularioEditarAnimal.value;
    const {
      color,
      genero,
      fecha_entrada,
      fecha_salida,
      peso_entrada,
      peso_salida,
      precio_entrada,
      precio_salida,
    } = this.formularioEditarAnimal.value;

    const num = numero.toString();
    const peso_sali = peso_salida.toString();
    const precio_sali = precio_salida.toString();

    this.animalesService
      .editarAnimal(
        this.animalSeleccionado._id,
        num,
        color,
        genero,
        fecha_entrada,
        fecha_salida,
        peso_entrada,
        peso_sali,
        precio_entrada,
        precio_sali
      )
      .subscribe((resp) => {
        if (resp) {
          if (fecha_salida != 'Sin fecha registrada') {
            console.log('Se ha desocupado el #!');
            console.log(num);

            this.desocuparNumero(num);
          }
          Swal.fire('Correcto', 'Registro Editado', 'success');
          this.closeModal();
          location.reload();
        }
      });

    console.log(this.formularioEditarAnimal.valid);
  }
}
