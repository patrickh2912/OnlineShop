import { Component, OnInit } from '@angular/core';
import { articuloPedido } from 'src/app/Modelo/ArticuloPedido';
import { ServicioCarritoService } from 'src/app/service/servicio-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  articulosCarrito:articuloPedido[]=[];
  
  constructor(public carritoService:ServicioCarritoService) {
    this.articulosCarrito=this.carritoService.CarritoCompra;
   }

  ngOnInit(): void {
  }
  eliminarArticuloCarrito(indice:number){
    this.carritoService.CarritoCompra.splice(indice,1);
    this.carritoService.calcularMonto();
    this.carritoService.calcularCantidad();
  }
  actualizarResumen(){
    this.carritoService.calcularMonto();
    this.carritoService.calcularCantidad();
  }

  
}
