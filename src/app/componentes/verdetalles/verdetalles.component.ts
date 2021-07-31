import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from '../../servicio/principal.service';
@Component({
  selector: 'app-verdetalles',
  templateUrl: './verdetalles.component.html',
  styleUrls: ['./verdetalles.component.css']
})
export class VerdetallesComponent implements OnInit {
  persona:any = [];
  constructor(private navegar:Router, private ruta:ActivatedRoute, private servicio:PrincipalService) { }

  ngOnInit(): void {
    let id = this.ruta.snapshot.paramMap.get('id');
    console.log(id);
    this.consultarPersona(id);
  }

  consultarPersona(id:any){
    this.servicio.obtenerPersona(id).subscribe(result => {
      this.persona = result;
      console.log(this.persona);
    });
  }
  volver(){
    this.navegar.navigate(['']);
  } 

}
