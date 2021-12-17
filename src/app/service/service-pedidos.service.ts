import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePedidosService {
    
    idPedido:number=0;
    fechaIncio:Date;
    tipo:String='';
    descripcion:String='';
    montoTotal:number=0;
    subtotal:number=0;
    descuento:number=0;
    fechaEstEntrega:Date;
    estado:String='';
    idCuentasUsuario:number=0;
    idEnvio:number=0;
  constructor(private http:HttpClient) { }
  getPedidos():Observable<any>{
    return this.http.get("http://localhost:8080/pedidos");
  }
  obtenerPedidoById(codigo:any):Observable<any>{
    return this.http.post("http://localhost:8080/obtenerInformacionPedido",codigo);
  }
  actualizarEstado(estado:any):Observable<any>{
    return this.http.post("http://localhost:8080/actualizarEstado",estado);
  }
}
