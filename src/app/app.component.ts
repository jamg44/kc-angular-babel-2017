import { Component } from '@angular/core';

interface Coche {
  ruedas: number;
  pegatinas?: string[];
}

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  {
  name: string = 'Babel';

  constructor() {
    const seat: Coche = {
      ruedas: 4,
      pegatinas: []
    };
  }

}
