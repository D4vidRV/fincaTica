import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal.service';
import { InsumosService } from '../../services/insumos.service';

@Component({
  selector: 'app-ver-insumos',
  templateUrl: './ver-insumos.component.html',
  styleUrls: ['./ver-insumos.component.css'],
})
export class VerInsumosComponent implements OnInit {
  insumos: any[] = []; //TODO: Corregir tipado
  insumoSeleccionado: any; //TODO: Corregir tipado

  modalSwitch!: boolean;
  modalEditarSwitch!: boolean;

  constructor(
    private fb: FormBuilder,
    private modalService: ModalService,
    private insumosService: InsumosService
  ) {}

  formularioFiltrarInsumos: FormGroup = this.fb.group({
    year: ['0', [Validators.required, Validators.min(1)]],
    month: ['0', Validators.required],
  });

  // Data de los selectores
  years: any;
  months: any;

  openModal() {
    this.modalSwitch = true;
  }

  openModalEditar(insumo: any) {
    this.modalEditarSwitch = true;

    this.insumoSeleccionado = insumo;
  }

  eliminarInsumo(usuario: any) {}

  buscar() {
    console.log(
      `VALOR DE AÑO: ${this.formularioFiltrarInsumos.get('year')?.value}`,
      `VALOR DE MES: ${this.formularioFiltrarInsumos.get('month')?.value}`
    );
    if (this.formularioFiltrarInsumos.get('month')?.value == 0) {
      console.log(`CONSULTANDO POR AÑO`);

      this.insumosService
        .consultarInsumosTotalesPorAño(
          this.formularioFiltrarInsumos.get('year')?.value
        )
        .subscribe((data: any) => {
          this.insumos = data;
          console.log(this.insumos);
        });
    } else if (this.formularioFiltrarInsumos.get('month')?.value != 0) {
      console.log(`CONSULTANDO POR AÑO Y MES`);

      this.insumosService
        .consultarInsumosTotalesPorAñoyMes(
          this.formularioFiltrarInsumos.get('year')?.value,
          this.formularioFiltrarInsumos.get('month')?.value
        )
        .subscribe((data: any) => {
          this.insumos = data;
        });
    }
  }

  ngOnInit(): void {
    this.modalService.$modalInsumos.subscribe((valor) => {
      this.modalSwitch = valor;
    });

    this.modalService.$modalInsumosEditar.subscribe((valor) => {
      this.modalEditarSwitch = valor;
    });

    this.insumosService.getYears().subscribe((data: any) => {
      this.years = data;
      console.log(this.years);
    });

    this.formularioFiltrarInsumos
      .get('year')
      ?.valueChanges.subscribe((year) => {
        console.log(year);
        this.formularioFiltrarInsumos.get('month')?.reset(0);

        this.insumosService.getMonths(parseInt(year)).subscribe((meses) => {
          console.log(meses);

          this.months = meses;
        });
      });
  }
}
