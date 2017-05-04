import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent} from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent} from './ejemplos/ejemplos-componentes.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { Servicio1, Servicio2Provider, EjemplosInyeccionComponent } from './ejemplos/ejemplos-inyeccion.component';

@NgModule({
  imports: [ // metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule
  ],
  declarations: [ // metemos todos los componentes, directivas y pipes
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent
  ],
  providers: [ // metemos los servicios
    ContactosService,
    Servicio1, // este servicio tiene @Injectable
    Servicio2Provider
  ],
  bootstrap: [ // componente raiz de enuestra app
    AppComponent
  ]
})
export class AppModule { }
