import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

  //constructor(nombre: string) {
  constructor() {

  }

  obtenerContactos(): Contacto[] {
    return [
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
