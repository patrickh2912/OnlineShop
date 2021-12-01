import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  detalleProducto:Producto[]=[]
  nombre:any;
  constructor(public detalleService:ServiceFiltroService) { 
    
  }

  ngOnInit(): void {
    this.detalleProducto=this.detalleService.DetalleProducto;
    this.nombre=this.detalleProducto[0].descripcion;
  }

}
