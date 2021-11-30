import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';
import { Caracteristica } from 'src/app/Modelo/Caracteristica';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  tipoCaracteristicas:Caracteristica[]=[]
  caracteristicas:Caracteristica[]=[]
  productos:Producto[]=[]
  constructor(private filtroService:ServiceFiltroService ) { 
    
  }

  ngOnInit(): void {
    this.obtenerCaracteristicas()
    this.obtenerTipoCaracteristicas()
  }
  obtenerTipoCaracteristicas(){
    
    this.filtroService.getTipoCaracteristicas().subscribe( data => {
      console.log(data);
      this.tipoCaracteristicas=data;
    });
  }
  obtenerCaracteristicas(){
    
    this.filtroService.getCaracteristicas().subscribe( data => {
      console.log(data);
      this.caracteristicas=data;
    });
  }
  
  getProductosByCaract(dato:Number){
    const busqueda = {idTipoCaracteristicasProducto: dato};
    this.filtroService.getProductosByCaract(busqueda).subscribe(data=>{
      console.log(data);
      this.productos=data
    })
  }
}
