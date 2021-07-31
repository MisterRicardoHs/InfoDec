import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importar rutas
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { VerdetallesComponent } from '../componentes/verdetalles/verdetalles.component';
import { InicioComponent } from '../componentes/inicio/inicio.component';

const rutas:Routes = [
  {path:'', component:InicioComponent },
  {path:'verdetalles/:id', component:VerdetallesComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
