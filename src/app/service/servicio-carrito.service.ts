import { Injectable } from '@angular/core';
import { articuloPedido } from '../Modelo/ArticuloPedido';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  public CarritoCompra:articuloPedido[]=[]
  /*------------------RESUMEN CARRITO---------------*/
  public montoTotal:number=0;
  public cantidadTotal:number=0;
  constructor() { 
    
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
