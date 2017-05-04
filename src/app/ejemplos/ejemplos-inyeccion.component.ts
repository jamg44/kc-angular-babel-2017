import { Component, Injectable } from '@angular/core';

// Inyección de dependencia usando decorador
@Injectable()
export class Servicio1 {
  obtenerMensaje() { return 'Soy un servicio decorado con @Injectable';}
}

// Iyección de dependencias usando un custom provider
export class Servicio2 {
  obtenerMensaje() { return 'Soy un servicio que usa proveedor de clase';}
}
export const Servicio2Provider = {
  provide: Servicio2,
  useClass: Servicio2
};

// usamos los servicios de arriba
@Component({
  selector: 'ejemplos-inyeccion',
  templateUrl: '/app/ejemplos/ejemplos-inyeccion.component.html'
})
export class EjemplosInyeccionComponent {

  mensaje1: string;
  mensaje2: string;

  constructor(
    private _servicio1: Servicio1,
    private _servicio2: Servicio2
    ) { }

  ngOnInit() {
    this.mensaje1 = this._servicio1.obtenerMensaje();
    this.mensaje2 = this._servicio2.obtenerMensaje();
  }

}

