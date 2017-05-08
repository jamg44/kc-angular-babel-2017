import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Contacto } from '../entidades/contacto';
import { Direcciones } from '../configuracion/direcciones';

@Injectable()
export class ContactosService {

  constructor(
    private _http: Http,
    @Inject(Direcciones) private _direcciones: any
  ) {}

  // recuperamos la lista de contactos del servidor
  obtenerContactos(): Observable<Contacto[]> {
    //return this._contactos;
    return this._http
        .get(`${this._direcciones.servidor}/contactos`)
        .map(res => {
          // obtengo la lista de objetos que viene en el body
          const lista: any[] = res.json();
          // creo una lista de Contactos y la devuelvo
          return lista.map(elemento => {
            return Contacto.desdeJSON(elemento);
          });
        }).share();
  }

  // creamos un contacto en el servidor
  guardarContacto(contacto: Contacto): Observable<Contacto> {
    console.log(contacto);
    return this._http
               .post(`${this._direcciones.servidor}/contactos`, contacto)
               .map(res => Contacto.desdeJSON(res.json()));
  }

  // eliminamos un contacto del servidor
  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._http.delete(`${this._direcciones.servidor}/contactos/${contacto.id}`)
               .map(res => Contacto.desdeJSON(res.json()));
  }

  // actualizamos un contacto en el servidor
  editarContacto(contacto: Contacto): Observable<Contacto> {
    return this._http
               .put(`${this._direcciones.servidor}/contactos/${contacto.id}`, contacto)
               .map(res => Contacto.desdeJSON(res.json()));
  }

  generarRutaAvatar(): Observable<string> {
     // http://faker.hook.io/?property=image.avatar
     return this._http
         .get(this._direcciones.faker)
         .map(res => {
           let rutaAvatar = res.text();
           rutaAvatar = rutaAvatar.replace(new RegExp('\"', 'g'), '' );
           return rutaAvatar;
         });

  }
}
