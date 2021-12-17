import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleProducto } from '../Modelo/DetalleProducto';
import { PrecioProducto } from '../Modelo/DetalleProductoPrecio';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetalleProductoService {
  colores:DetalleProducto[]=[];
  tallas:DetalleProducto[]=[];
/*---------Detalle producto precio----------------------------------------*/
    detalleProducto:PrecioProducto[]=[]
    imagenReferencial:String=''
/*---------------------Detalle de producto unico-------------------------------------------------*/
    public id:number=0;
    public color:String;
    public modelo:String;
    public Talla:number;


  /*/-----------------------------------------------*/
  
  constructor(private http:HttpClient) { }
  obtenerColores(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerColores",dato);
  }
  obtenerTallas(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerTallas",dato);
  }
  obtenerPreciosProducto(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerPrecio",dato);
  }
  obtenerCaracteristicasProdById(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/caracteristicasProductobyId",dato)
  }
  obtenerProductoByCaract(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/productosByCaract",dato)
  }
  /*------------------------------------------------------------------------*/
  obtenerDatoProductoById(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductoById",dato)
  }
}
