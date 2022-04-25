import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NumerosService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.herokuUrl;

  consultarNumeros() {
    const url = `${this.baseUrl}/numeros/all`;

    return this.http.get(url);
  }

  consultarNumerosActivos() {
    const url = `${this.baseUrl}/numeros`;

    return this.http.get(url);
  }

  agregarNumero(num: number) {
    const url = `${this.baseUrl}/numeros`;
    const body = { num };

    return this.http.post(url, body);
  }

  editarNumero(id: string, data: any) {
    console.log('Desde editarNumero');
    console.log(id);
    console.log(data);
    
    const url = `${this.baseUrl}/numeros/${id}`;
    return this.http.put(url, data);
  }
}
