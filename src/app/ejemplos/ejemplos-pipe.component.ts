import { Component } from '@angular/core';

@Component({
  selector: 'ejemplos-pipe',
  template: `
    <div>
      <strong>Pipa de Fechas:</strong> {{ fecha | date:'dd/MM/yyyy' }}<br>
      <strong>Pipa de moneda:</strong> {{ precio | currency:'EUR' }}<br>
      <strong>Pipa de texto:</strong> {{ texto | titlecase | uppercase}}<br>
      <strong>Pipa de json:</strong> <pre>{{ objeto | json }}</pre>

    </div>

  `
})
export class EjemplosPipeComponent {

  fecha: Date = new Date();

  precio: number = 34.95;

  texto: string = 'texto que estba en minúsculas';

  objeto: any = {
    selector: 'aaaa',
    zzz: 222,
    fecha: new Date()
  };

}
