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
export class UsuariosService implements AsyncValidator {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.herokuUrl;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    console.log(email);

    const url = `${this.baseUrl}/usuarios/v_email/${email}`;

    return this.http.get<any[]>(url).pipe(
      map((resp) => {
        return resp.length === 0 ? null : { emailTomado: true };
      })
    );
  }

  consultarUsuarios() {
    const url = `${this.baseUrl}/usuarios`;

    return this.http.get(url);
  }

  agregarUsuario(
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    user: string,
    password: string,
    correo: string,
    rol: string
  ) {
    const url = `${this.baseUrl}/usuarios`;
    const body = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      user,
      password,
      correo,
      rol,
    };

    return this.http.post(url, body);
  }

  editarUsuario(id: string, data: any) {
    const url = `${this.baseUrl}/usuarios/${id}`;
    // const body = {
    //   data,
    // };

    console.log('Desde Servicio');
    console.log(id);
    console.log(data);

    return this.http.put(url, data);
  }

  eliminarUsuario(id: string, data: any) {
    const url = `${this.baseUrl}/usuarios/${id}`;

    console.log('Desde eliminarUsuario');
    console.log(id);
    console.log(data);
    return this.http.put(url, data);
  }
}
