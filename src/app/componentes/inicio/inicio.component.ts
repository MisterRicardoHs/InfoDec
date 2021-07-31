import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../servicio/principal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  personas:any = [];
  buscador:string = "";
  palabra:string = "";
  constructor(private servicio:PrincipalService, private navegar:Router){
    this.obtenerPersonas();
  }

  ngOnInit(): void {
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

  buscar(){
    this.buscador = this.palabra;
  }

}
