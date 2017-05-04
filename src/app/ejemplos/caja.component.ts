import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'caja',
  template: `
    <div [style.backgroundColor]="color"
         (mouseenter)="notificar()"></div>`,
  styles: [`
    div {
      width: 100px;
      height: 100px;

    }
  `]
})
export class CajaComponent {

  // Recibimos color como parámetro de entrada al componente
  @Input() color: string = 'red';

  // Definimos un emisor de eventos hacia el padre
  @Output() encima: EventEmitter<string> = new EventEmitter();

  // Emitimos un evento al padre
  notificar() {
    this.encima.emit(`El color de la caja es ${this.color}`);
  }

}
