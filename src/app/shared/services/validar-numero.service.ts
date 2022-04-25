import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ValidarNumeroService implements AsyncValidator {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.herokuUrl;

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const numero = control.value;

    console.log(numero);

    const url = `${this.baseUrl}/numeros/v_numero/${numero}`;

    return this.http.get<any[]>(url).pipe(
      map((resp) => {
        return resp.length === 0 ? null : { numeroTomado: true };
      })
    );
  }
}
