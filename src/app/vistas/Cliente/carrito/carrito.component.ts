import { Component, OnInit } from '@angular/core';
import { articuloPedido } from 'src/app/Modelo/ArticuloPedido';
import { Pedido } from 'src/app/Modelo/Pedido';
import { ServiceLoginService } from 'src/app/service/service-login.service';
import { ServicioCarritoService } from 'src/app/service/servicio-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  articulosCarrito:articuloPedido[]=[];
  articulo:articuloPedido;
  pedido:Pedido;
  idPedido=0;
  montoTotal=0;
  constructor(public carritoService:ServicioCarritoService,public datoCuenta:ServiceLoginService) {
    this.articulosCarrito=this.carritoService.CarritoCompra;
   }

  ngOnInit(): void {
  }
  
  
    
  
  /*
  obtenerDatosByIdProducto(codigo:number){
    this.id=codigo;
    const product = {idProducto: codigo};
    this.DetalleProd.obtenerDatoProductoById(product).subscribe( data => {
      
      this.producto.idProducto=data.producto.idProducto;
      this.producto.descripcion=data.producto.descripcion;
      this.producto.costo=data.producto.costo;
      console.log(this.producto)
      
    })
  }*/
  enviarPedido(){
    //this.crearPedidoInicial();
    //this.registrarArticuloPedido();
    setTimeout(()=>{this.actualizarPedido();}, 4000);
    
  }



  crearPedidoInicial(){
    const pedido={
      idPedido:0,
      fechaIncio:"2021-17-10",
      tipo:"Pedido estandar",
      descripcion:" ",
      montoTotal:0,
      subtotal:0,
      descuento:0,
      fechaEstEntrega:"2021-12-20",
      estado:" ",
      idCuentasUsuario:0,
      idEnvio:0};
      this.carritoService.registrarPedidoInicial(pedido).subscribe(
        data=>{
          this.pedido=data.pedidoVenta;
          this.carritoService.idPedido=data.pedidoVenta.idPedido;
          //alert(this.carritoService.idPedido);
          console.log(pedido)
        }
      )
    };
    registrarArticuloPedido(){
      /*
        for (let index = 0; index < this.carritoService.CarritoCompra.length; index++) {
          const element = this.carritoService.CarritoCompra[index];
          const articulo={
            idPedido:this.carritoService.idPedido,
            idProducto:element.idProducto,
            cantidad:element.cantidad,
            descripcion:element.descripcion,
            precioUnitario:element.precioUnitario,
            precioTotal:element.precioTotal,
            terminosCondiciones:element.terminosCondiciones,
            };
            this.carritoService.registrarArticulo(articulo).subscribe(
              data=>{
                this.articulo=data.articuloPedido;
                //alert(this.carritoService.idPedido);
                console.log(articulo)
              }
            )
            setTimeout(()=>{}, 8000);
          
        };
        */
      
    };
    actualizarPedido(){
      const pedido={
        idPedido:this.carritoService.idPedido,
        fechaIncio:"2021-17-10",
        tipo:"Pedido estandar",
        descripcion:" ",
        montoTotal:this.carritoService.montoTotal,
        subtotal:this.carritoService.montoTotal,
        descuento:0,
        fechaEstEntrega:"2021-12-20",
        estado:"Por entregar",
        idCuentasUsuario:this.datoCuenta.idCuentasUsuario,
        idEnvio:0};
        this.carritoService.actualizarPedido(pedido).subscribe(
          data=>{
            this.pedido=data.pedidoVenta;
            this.carritoService.idPedido=data.pedidoVenta.idPedido;
            //alert(this.carritoService.idPedido);
            this.idPedido=data.pedidoVenta.idPedido;
            this.montoTotal=data.pedidoVenta.montoTotal
            console.log(pedido);
            
          }
        )
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
