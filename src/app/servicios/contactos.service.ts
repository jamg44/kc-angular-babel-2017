import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contacto } from '../entidades/contacto';

@Injectable()
export class ContactosService {

  constructor(private _http: Http) {}


  obtenerContactos(): Observable<Contacto[]> {
    //return this._contactos;
    return this._http
        .get('http://localhost:3004/contactos')
        .map(res => {
          // obtengo la lista de objetos que viene en el body
          const lista: any[] = res.json();
          // creo una lista de Contactos y la devuelvo
          return lista.map(elemento => {
            return Contacto.desdeJSON(elemento);
          });
        });
  }

  guardarContacto(contacto: Contacto): Observable<Contacto> {
    console.log(contacto);
    return this._http
               .post('http://localhost:3004/contactos', contacto)
               .map(res => Contacto.desdeJSON(res.json()));
  }

}
