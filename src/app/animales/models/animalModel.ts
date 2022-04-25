import { Color } from 'src/app/colores/models/colorModel';
import { Numero } from 'src/app/numeros/models/numeroModel';

export interface Animal {
  _id: string;
  numero: Numero;
  color: Color;
  genero: string;
  fecha_entrada: string;
  fecha_salida: string;
  peso_salida: string;
  precio_salida: string;
  estado: boolean;
}
