import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CajaComponent } from './ejemplos/caja.component';
import { EjemplosBindingComponent} from './ejemplos/ejemplos-binding.component';
import { EjemplosComponentesComponent} from './ejemplos/ejemplos-componentes.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './servicios/contactos.service';
import { DetallesContactoComponent } from './detalles-contacto/detalles-contacto.component';
import { Servicio1, Servicio2Provider, EjemplosInyeccionComponent } from './ejemplos/ejemplos-inyeccion.component';
import { FormualarioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from './servicios/contactos-resolve.service';
import { ProveedorDirecciones } from './configuracion/direcciones';
import { EjemplosObservablesComponent, EjemplosObservablesWikipediaComponent } from './ejemplos/ejemplos-observables.component';
import { EjemplosPipeComponent } from './ejemplos/ejemplos-pipe.component';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { EjemplosDirectivasComponent } from './ejemplos/ejemplos-directivas.component';
import { EjemplosDirectivasAtributoDirective } from './ejemplos/ejemplos-directivas.directive';

@NgModule({
  imports: [ // metemos todos los módulos que necesita mi app
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    AppRoutingModule
  ],
  declarations: [ // metemos todos los componentes, directivas y pipes
    AppComponent,
    CajaComponent,
    EjemplosBindingComponent,
    EjemplosComponentesComponent,
    ListaContactosComponent,
    DetallesContactoComponent,
    EjemplosInyeccionComponent,
    FormualarioContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    EjemplosObservablesComponent,
    EjemplosObservablesWikipediaComponent,
    EjemplosPipeComponent,
    OrdenarPipe,
    EjemplosDirectivasComponent, EjemplosDirectivasAtributoDirective
  ],
  providers: [ // metemos los servicios
    ContactosService,
    Servicio1, // este servicio tiene @Injectable
    Servicio2Provider,
    ContactosResolve,
    ProveedorDirecciones
  ],
  bootstrap: [ // componente raiz de enuestra app
    AppComponent
  ]
})
export class AppModule { }
