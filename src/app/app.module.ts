import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { VerdetallesComponent } from './componentes/verdetalles/verdetalles.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [	
    AppComponent, VerdetallesComponent, InicioComponent, 
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
