import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalesService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.herokuUrl;

  consultarAnimales() {
    const url = `${this.baseUrl}/animales`;

    return this.http.get(url);
  }

  consultarAnimalesSinSalida() {
    const url = `${this.baseUrl}/animales/sinsalida`;

    return this.http.get(url);
  }

  consultarAnimalesPorGenero() {
    const url = `${this.baseUrl}/animales/cantidadgeneros`;

    return this.http.get(url);
  }

  agregarAnimal(
    numero: string,
    color: string,
    genero: string,
    fecha_entrada: string,
    peso_entrada: string,
    precio_entrada: string
  ) {
    const url = `${this.baseUrl}/animales`;
    const body = {
      numero,
      color,
      genero,
      fecha_entrada,
      peso_entrada,
      precio_entrada,
    };

    return this.http.post(url, body);
  }

  editarAnimal(
    id: string,
    numero: string,
    color: string,
    genero: string,
    fecha_entrada: string,
    fecha_salida: string,
    peso_entrada: string,
    peso_salida: string,
    precio_entrada: string,
    precio_salida: string
  ) {
    const url = `${this.baseUrl}/animales/${id}`;

    // const numeroString = numero.toString();
    // const precioSalidaString = precio_salida.toString();
    // const pesoSalidaString = peso_salida.toString();
    const body = {
      id,
      numero,
      color,
      genero,
      fecha_entrada,
      fecha_salida,
      peso_entrada,
      peso_salida,
      precio_entrada,
      precio_salida,
    };

    return this.http.put(url, body);
  }
}
