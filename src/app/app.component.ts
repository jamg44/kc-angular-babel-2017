import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{alumnos}}</h1>
    <h2> Y el número de la suerte es: {{ numeroDeLaSuerte }} </h2>
    <textarea [rows]="textAreaLineas"></textarea>
    <div [class.caja]="pintamosClase"></div>
    <div [ngClass]="clases"></div>
    <p [style.color]="obtenerColor()">buenos dias</p>
    <p [ngStyle]="obtenerEstilos()">buenas tardes</p>
    <button (click)="mostrarMensaje()">Mostrar mensaje</button>
    <input [(ngModel)]="mensaje" type="text"/>
    {{ mensaje }}
    `,
  styles: [`
    .caja {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `]
})
export class AppComponent  {
  alumnos: string = 'Babel';

  numeroDeLaSuerte: number = 43;

  // binding de propiedades
  textAreaLineas: number = 6;

  // binding de clases
  pintamosClase: boolean = true;
  clases: any = { uno: false, dos: true};

  mensaje: string = 'cambiame';

  constructor() {
  }

  // binding de estilos
  obtenerColor(): string {
    return 'green';
  }

  obtenerEstilos(): any {
    return {
      backgroundColor: 'red', // background-color, sin guiones!!!!!
      color: 'white'
    };
  }

  mostrarMensaje(): void {
    alert('Hola señores');
  }

}
