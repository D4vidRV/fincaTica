import { Component, OnInit } from '@angular/core';
import { AnimalesService } from 'src/app/animales/services/animales.service';

@Component({
  selector: 'app-cantidad-por-genero',
  templateUrl: './cantidad-por-genero.component.html',
  styleUrls: ['./cantidad-por-genero.component.css'],
})
export class CantidadPorGeneroComponent implements OnInit {
  data: any[] = [];
  view: [number, number] = [500, 200];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  cardColor: string = '#232837';

  constructor(private animalesService: AnimalesService) {}

  ngOnInit(): void {
    this.animalesService
      .consultarAnimalesPorGenero()
      .subscribe((datos: any) => {
        this.data = datos;
      });
  }

  onSelect(event: Event) {
    console.log(event);
  }
}
