import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { SubastasRoutingModule } from './subastas-routing.module';
import { VerSubastasComponent } from './pages/ver-subastas/ver-subastas.component';

@NgModule({
  declarations: [VerSubastasComponent],
  exports: [VerSubastasComponent],
  imports: [CommonModule, SubastasRoutingModule, ReactiveFormsModule, BrowserModule],
})
export class SubastasModule {}
