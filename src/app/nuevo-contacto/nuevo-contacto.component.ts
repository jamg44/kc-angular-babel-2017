import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';

@Component({
  template: `
    <formulario-contacto (formularioAceptado)="guardarContacto($event)"></formulario-contacto>
  `
})
export class NuevoContactoComponent {

  constructor(
    private _contactosService: ContactosService,
    private _router: Router
  ) {}

  guardarContacto(contacto: Contacto) {
    this._contactosService.guardarContacto(contacto)
                          .subscribe(contacto => {
                            // navegar a mis contactos
                            this._router.navigate(['mis-contactos']);
                          });
  }


}
