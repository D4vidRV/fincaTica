import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-animales-editar',
  templateUrl: './modal-animales-editar.component.html',
  styleUrls: ['./modal-animales-editar.component.css']
})
export class ModalAnimalesEditarComponent implements OnInit {
  @Input() animal: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
