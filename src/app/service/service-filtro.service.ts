import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceFiltroService {
  DetalleProducto:Producto[]=[]
  constructor(private http:HttpClient){
    

   }
  filtrar(caracteristica:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductosCaracteristica", caracteristica);

  }
  busqueda(cod:any):Observable<any>{
    return this.http.post("http://localhost:8080/seleccionarProducto",cod);
  }
  getTipoCaracteristicas():Observable<any>{
    return this.http.get("http://localhost:8080/obtenerTipoCaracteristicas");
  }
  getCaracteristicas():Observable<any>{
    return this.http.get("http://localhost:8080/obtenerCaracteristicas");
  }
  getProductosByCaract(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductosCaracteristica",dato);
  }


}
