import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubastasService } from '../../services/subastas.service';

@Component({
  selector: 'app-ver-subastas',
  templateUrl: './ver-subastas.component.html',
  styleUrls: ['./ver-subastas.component.css'],
})
export class VerSubastasComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private subastasService: SubastasService
  ) {}

  subastas!: any[];
  subasta!: { _id: string; precios: []; nombre: string };
  precios!: [];
  fechas!: any[];

  formularioBuscarSubasta: FormGroup = this.fb.group({
    subasta: ['', Validators.required],
    fecha: ['', [Validators.required]],
  });

  buscarSubastas() {
    this.subastasService.consultarNombresSubastas().subscribe((data: any) => {
      // console.log(data);
      this.subastas = data;
      console.log(this.subastas);
      console.log(this.subasta);
    });
  }

  buscarSubasta() {
    const { subasta } = this.formularioBuscarSubasta.value;
    this.subastasService
      .consultarFechasSubasta(subasta)
      .subscribe((data: any) => {
        // console.log(data);
        this.subasta = data;
        // this.fechas = this.subasta;
        console.log(this.subasta);
        this.precios = this.subasta.precios;
      });
  }

  buscarPrecios() {
    console.log(this.formularioBuscarSubasta.value);
  }

  ngOnInit(): void {
    // this.buscarSubastas();
  }
}
