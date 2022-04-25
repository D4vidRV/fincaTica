import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { NumerosService } from '../../services/numeros.service';

@Component({
  selector: 'app-ver-numeros',
  templateUrl: './ver-numeros.component.html',
  styleUrls: ['./ver-numeros.component.css'],
})
export class VerNumerosComponent implements OnInit {
  numeros: any; //TODO: Corregir tipado

  modalSwitch!: boolean;

  constructor(
    private numerosService: NumerosService,
    private modalService: ModalService
  ) {}

  openModal() {
    this.modalSwitch = true;
  }

  ngOnInit(): void {
    this.numerosService.consultarNumeros().subscribe((data) => {
      this.numeros = data;
      console.log(this.numeros);
    });
    this.modalService.$modalNumeros.subscribe((valor) => {
      this.modalSwitch = valor;
    });
  }
}
