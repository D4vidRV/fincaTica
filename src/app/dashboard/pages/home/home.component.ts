import { Component, OnInit } from '@angular/core';
import { DATA_BAR_CHART } from './models/bar_chart';
import { IBarChart } from './models/charts.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSelect() {}
}
