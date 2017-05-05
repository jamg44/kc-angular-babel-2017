import { Injectable } from '@angular/core';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

  //constructor(nombre: string) {
  constructor() {

  }

  obtenerContactos(): Contacto[] {
    return [
      Contacto.desdeJSON({
        id: 1,
        nombre: 'Steve',
        apellidos: 'Jobs',
        email: 'steve.jobs@apple.com',
        telefono: '64237846246',
        twitter: 'stevejobs',
        facebook: 'stevejobs',
        avatar: ''
      }),
      Contacto.desdeJSON({
        id: 2,
        nombre: 'Bill',
        apellidos: 'Gates',
        email: 'bill.gates@microsoft.com',
        telefono: '21878216381',
        twitter: 'billgates',
        facebook: 'billgates',
        avatar: ''
      }),
      Contacto.desdeJSON({
        id: 3,
        nombre: 'Elon',
        apellidos: 'Musk',
        email: 'elon.musk@tesla.com',
        telefono: '981293998711289',
        twitter: 'elonmusk',
        facebook: 'elonmusk',
        avatar: ''
      })
    ];
  }

}
