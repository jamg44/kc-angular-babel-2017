import { Component, OnInit } from '@angular/core';
import { Contacto } from './entidades/contacto';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent implements OnInit {


  listaContactos: Contacto[];

  ngOnInit(): void {
    this.listaContactos = [
      {
        nombre: 'Steve Jobs',
        email: 'steve.jobs@apple.com',
        telefono: '64237846246'
      },
      {
        nombre: 'Bill Gates',
        email: 'bill.gates@microsoft.com',
        telefono: '21878216381'
      },
      {
        nombre: 'Elon Musk',
        email: 'elon.musk@tesla.com',
        telefono: '981293998711289'
      }
    ];
  }


}
