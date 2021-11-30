import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceFiltroService {

  constructor(private http:HttpClient){ }
  filtrar(caracteristica:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerProductosCaracteristica", caracteristica);

  }
  busqueda(dato:any):Observable<any>{
    return this.http.post(" ",dato);
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
