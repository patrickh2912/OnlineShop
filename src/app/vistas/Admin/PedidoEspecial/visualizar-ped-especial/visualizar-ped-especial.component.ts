import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/Modelo/Pedido';
import { ServicePedidosService } from 'src/app/service/service-pedidos.service';

@Component({
  selector: 'app-visualizar-ped-especial',
  templateUrl: './visualizar-ped-especial.component.html',
  styleUrls: ['./visualizar-ped-especial.component.css']
})
export class VisualizarPedEspecialComponent implements OnInit {
  estadoBoton=''
  pedidosRealizados:any;
  filtroPedido:String='';
  infoPedido:Pedido;
  estadoCambio:String='';
  constructor(public pedidoService:ServicePedidosService) { }

  ngOnInit(): void {
    this.obtenerPedidos();
    this.filtroPedido='Pedido estandar'
  }
  Cerrar(){
    this.estadoBoton='modal'
  }
  obtenerPedidos(){
    this.pedidoService.getPedidos().subscribe(data=>{
      console.log(data);
      this.pedidosRealizados=data;
    })
  }
  filtrarPedido(tipo:String){
    this.filtroPedido=tipo;
  }

  /*---------------------------------------------------*/
  obtenerInformacionPedido(codigo:number){
    const cod = {idPedido: codigo};
    this.pedidoService.obtenerPedidoById(cod).subscribe( data => {
      console.log(data);
      console.log(data.pedidoVenta)
      this.infoPedido=data.pedidoVenta;
      this.pedidoService.idPedido=this.infoPedido.idPedido;
      this.pedidoService.estado=this.infoPedido.estado;
      this.pedidoService.montoTotal=this.infoPedido.montoTotal;
      this.pedidoService.idCuentasUsuario=this.infoPedido.idCuentasUsuario;
      this.pedidoService.fechaEstEntrega=this.infoPedido.fechaEstEntrega;
      this.pedidoService.descuento=this.infoPedido.descuento;
      this.pedidoService.subtotal=this.infoPedido.subtotal;
      this.pedidoService.descripcion=this.infoPedido.descripcion;
      this.pedidoService.idEnvio=this.infoPedido.idEnvio;
      this.pedidoService.fechaIncio=this.infoPedido.fechaIncio;
      this.pedidoService.tipo=this.infoPedido.tipo;
      })
    }
  actualizarEstado(codigo:number,codigoCuenta:number,codEnvio:number){
    const datos = {
      idPedido: codigo,
      fechaIncio:this.pedidoService.fechaIncio,
      tipo:this.pedidoService.tipo,
      descripcion:this.pedidoService.descripcion,
      montoTotal:this.pedidoService.montoTotal,
      subtotal:this.pedidoService.subtotal,
      descuento:this.pedidoService.descuento,
      fechaEstEntrega:this.pedidoService.fechaEstEntrega,

      idCuentasUsuario:codigoCuenta,
      idEnvio:codEnvio,
      estado:this.estadoCambio
      
    
    
    };
    this.pedidoService.actualizarEstado(datos).subscribe( data => {
      console.log(data);
      console.log(data.pedidoVenta)
    
      })
    }
  
  

}