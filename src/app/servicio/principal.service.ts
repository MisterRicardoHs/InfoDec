import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  url:string = "http://localhost:8000/personas";
  
  constructor(private http:HttpClient) { }

  obtenerPersonas(){
    return this.http.get(this.url);
  }

  obtenerPersona(id:string){
    return this.http.get(this.url+"/"+id);
  }
}
