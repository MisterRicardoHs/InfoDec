import { Component } from '@angular/core';
import { PrincipalService } from './servicio/principal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera Aplicación Hs';
  saludo = 'Hola Mundo';
  personas:any = [];

  constructor(private servicio:PrincipalService, private navegar:Router){
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this.servicio.obtenerPersonas().subscribe(result => {
      this.personas = result;
      console.log(this.personas);
    });
  }

  verDetalles(id:string){
    this.navegar.navigate(['verdetalles/'+id]);
  }
}
