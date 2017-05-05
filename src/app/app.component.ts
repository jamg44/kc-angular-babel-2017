import { Component, OnInit } from '@angular/core';
import { Contacto } from './entidades/contacto';
import { ContactosService } from './servicios/contactos.service';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent implements OnInit {


  listaContactos: Contacto[];

  contactoSeleccionado: Contacto;

  constructor( private _contactosService: ContactosService) {}

  ngOnInit(): void {
    this._contactosService.obtenerContactos()
                          .subscribe(contactos => {
                            this.listaContactos = contactos;
                          });
  }

  mostrarDetalles(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }

  navegarRuta(ruta: string) {
    console.log('navegar', ruta);
    window.open(ruta, '_blank');
  }

  guardarContacto(contacto: Contacto) {
    this._contactosService.guardarContacto(contacto)
                          .subscribe(contacto => {});
  }
}
