import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { articuloPedido } from '../Modelo/ArticuloPedido';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  public CarritoCompra:articuloPedido[]=[]
  /*------------------RESUMEN CARRITO---------------*/
  public montoTotal:number=0;
  public cantidadTotal:number=0;
  public costoTransporte:number=0;
  /*------------------DETALLE PEDIDO-------------------*/
  public idPedido:number=0;
  constructor(private http:HttpClient) { 
    
  }
  registrarPedidoInicial(pedido:any):Observable<any>{
    return this.http.post("http://localhost:8080/crearPedido",pedido);
  }
  registrarArticulo(articulo:any):Observable<any>{
    return this.http.post("http://localhost:8080/registrarArticulo",articulo);
  }
  actualizarPedido(pedido:any):Observable<any>{
    return this.http.post("http://localhost:8080/actualizarPedido",pedido);
  }

  
  calcularMonto(){
    this.montoTotal=0;
    for (let index = 0; index < this.CarritoCompra.length; index++) {
      const element = this.CarritoCompra[index].precioUnitario*this.CarritoCompra[index].cantidad;
      this.montoTotal=this.montoTotal+element;
    }
  }
  calcularCantidad(){
    this.cantidadTotal=0;
    for (let index = 0; index < this.CarritoCompra.length; index++) {
      const element = this.CarritoCompra[index].cantidad;
      this.cantidadTotal=this.cantidadTotal+element;
    }
  }
}
