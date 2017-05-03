import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ // metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule
  ],
  declarations: [ // metemos todos los componentes, directivas y pipes
    AppComponent
  ],
  providers: [ // metemos los servicios

  ],
  bootstrap: [ // componente raiz de enuestra app
    AppComponent
  ]
})
export class AppModule { }
