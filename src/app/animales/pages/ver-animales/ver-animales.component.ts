import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Animal } from '../../models/animalModel';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-ver-animales',
  templateUrl: './ver-animales.component.html',
  styleUrls: ['./ver-animales.component.css'],
})
export class VerAnimalesComponent implements OnInit {
  animales: Animal[] = [];
  cols: any[] = [];

  modalSwitch!: boolean;
  modalEditarSwitch!: boolean;
  animalSeleccionado: any; //TODO: Corregir tipado

  constructor(
    private modalService: ModalService,
    private animalesService: AnimalesService
  ) {}

  openModal() {
    this.modalSwitch = true;
  }

  openModalEditar(animal: any) {
    this.modalEditarSwitch = true;

    this.animalSeleccionado = animal;
  }

  editarAnimal(animal: any) {
    console.log(animal);
    this.openModalEditar(animal);
  }

  ngOnInit(): void {
    this.modalService.$modalAnimales.subscribe((valor) => {
      this.modalSwitch = valor;
    });

    this.modalService.$modalAnimalesEditar.subscribe((valor) => {
      this.modalEditarSwitch = valor;
    });

    this.cols = [
      { field: 'numero', header: 'Número' },
      { field: 'color', header: 'Color' },
      { field: 'genero', header: 'Género' },
      { field: 'fecha_entrada', header: 'Fecha entrada' },
      { field: 'fecha_salida', header: 'Fecha salida' },
    ];

    this.animalesService.consultarAnimales().subscribe((data: any) => {
      // console.log(data);
      this.animales = data;
      console.log(this.animales);
    });
  }
}
