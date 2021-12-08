import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDatoVistasService {

  constructor(private http:HttpClient) { }

  getCategoria():Observable<any>{
    return this.http.get("http://localhost:8080/categorias");
  }
  getModelos():Observable<any>{
    return this.http.get("http://localhost:8080/productos/modelos");
  }
}
