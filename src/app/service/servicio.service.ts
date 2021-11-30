import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Caracteristica } from '../Modelo/Caracteristica';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 
  constructor(private http:HttpClient) { }
  /*
    Url ='http://localhost:8080/productos';
  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }*/
}
