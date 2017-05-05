import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contacto } from '../entidades/contacto';

@Component({
  selector: 'formulario-contacto',
  templateUrl: '/app/formulario-contacto/formulario-contacto.component.html',
  styleUrls: ['app/formulario-contacto/formulario-contacto.component.css']
})

export class FormualarioContactoComponent {

  @Output() formularioAceptado: EventEmitter<Contacto> = new EventEmitter();

  notificarContacto(contactoForm: FormGroup) {
    const contacto: Contacto = Contacto.desdeJSON(contactoForm.value);
    this.formularioAceptado.emit(contacto);
  }
}