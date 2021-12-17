import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Modelo/Producto';
import { ProductoCategoria } from '../Modelo/ProductoCategoria';

@Injectable({
  providedIn: 'root'
})
export class ServiceFiltroService {
  DetalleProducto:Producto[]=[]
  /*-----------------arreglo de encuentros por categoria------------------*/
   productosByCateg:ProductoCategoria[]=[]
  /*---------------------------------------------------------------------*/
  constructor(private http:HttpClient){
    
    

   }
  filtrar(caracteristica:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductosCaracteristica", caracteristica);

  }
  busqueda(cod:any):Observable<any>{
    return this.http.post("http://localhost:8080/seleccionarProducto",cod);
  }
  getTipoCaracteristicas():Observable<any>{
    return this.http.get("http://localhost:8080/tipoCaracteristicas");
  }
  getCaracteristicas():Observable<any>{
    return this.http.get("http://localhost:8080/caracteristicas");
  }
  getProductosByCaract(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductosCaracteristica",dato);
  }
  getProductosImagenes(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerImagenProducto",dato);
  }

  /*------------------------------------------------------------------------*/
  obtenerProductoByCategoria(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductoByCategoria",dato);
  }

  obtenerProductosByFiltro(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/filtrar",dato);
  }
  /*----------------------------------------------------------------------*/
  obtenerProductoByBuscador(dato:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductoByBuscador",dato);
  }

}
