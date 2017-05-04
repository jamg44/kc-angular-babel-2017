import { Component, Input } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: '/app/lista-contactos/lista-contactos.component.html'
})

export class ListaContactosComponent {

  @Input() contactos: Contacto[];

}
