import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubastasService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.herokuUrl;

  // Metodo para consultar las subastas existentes
  consultarNombresSubastas() {
    const url = `${this.baseUrl}/subastas`;

    return this.http.get(url);
  }

  // Método para consultar las fechas de la subasta especificada
  consultarFechasSubasta(idSubasta: string) {
    const url = `${this.baseUrl}/subastas/${idSubasta}`;

    return this.http.get(url);
  }

  consultarPreciosSubasta(idSubasta: string, fecha: any) {
    const url = `${this.baseUrl}/subastas/${idSubasta}/${fecha}`;

    return this.http.get(url);
  }
}
