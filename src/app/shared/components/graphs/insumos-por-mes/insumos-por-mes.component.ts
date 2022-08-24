import { Component, OnInit } from '@angular/core';
import { DATA_BAR_CHART } from 'src/app/dashboard/pages/home/models/bar_chart';
import { IBarChart } from 'src/app/dashboard/pages/home/models/charts.interface';
import { InsumosService } from 'src/app/insumos/services/insumos.service';

@Component({
  selector: 'app-insumos-por-mes',
  templateUrl: './insumos-por-mes.component.html',
  styleUrls: ['./insumos-por-mes.component.css'],
})
export class InsumosPorMesComponent implements OnInit {
  data: IBarChart[] = [];
  multi: any[] = [];
  view: [number, number] = [800, 500];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Meses';
  showYAxisLabel = true;
  yAxisLabel = 'Insumos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(private insumosService: InsumosService) {
    // this.data = DATA_BAR_CHART;
    // this.insumosService.consultarInsumosYMeses().subscribe((datos: any) => {
    //   this.data = datos;
    //   console.log(this.data);
    // });
  }

  ngOnInit(): void {
    this.insumosService.consultarInsumosYMeses().subscribe((datos: any) => {
      this.data = datos;
      console.log(this.data);
    });
  }

  onSelect() {}
}
