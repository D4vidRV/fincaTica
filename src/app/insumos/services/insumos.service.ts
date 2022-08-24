import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InsumosService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.herokuUrl;

  consultarInsumos() {
    const url = `${this.baseUrl}/insumos`;

    return this.http.get(url);
  }

  getYears() {
    const url = `${this.baseUrl}/insumos/years`;

    return this.http.get(url);
  }

  getMonths(year: number) {
    const url = `${this.baseUrl}/insumos/months/${year}`;

    return this.http.get(url);
  }

  consultarInsumosTotalesPorAño(year: number) {
    const url = `${this.baseUrl}/insumos/totales/${year}`;

    return this.http.get(url);
  }

  consultarInsumosTotalesPorAñoyMes(year: number, month: number) {
    const url = `${this.baseUrl}/insumos/totales/${year}/${month}`;

    return this.http.get(url);
  }
  
  consultarInsumosYMeses() {
    const url = `${this.baseUrl}/insumos/mesesinsumos`;

    return this.http.get(url);
  }

  agregarInsumo(
    animal: string,
    monto: number,
    descripcion: string,
    fecha_registro: string
  ) {
    const url = `${this.baseUrl}/insumos`;
    const body = {
      animal,
      monto,
      descripcion,
      // fecha_registro,
    };
    return this.http.post(url, body);
  }
}
