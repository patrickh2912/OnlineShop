import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';
import { Caracteristica } from 'src/app/Modelo/Caracteristica';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoCaract } from 'src/app/Modelo/ProductoCaract';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  tipoCaracteristicas:Caracteristica[]=[]
  caracteristicas:Caracteristica[]=[]
  productos:ProductoCaract[]=[]
  productosById:Producto[]=[];
  nombre:any=[];
  nombreUnico:any;
  constructor(private filtroService:ServiceFiltroService, private router:Router ) { 
    
  }

  ngOnInit(): void {
    this.obtenerCaracteristicas()
    this.obtenerTipoCaracteristicas();
  }
  ObtenerNombre(){
    this.nombreUnico=this.productosById[0].descripcion;
    

  /*  
    for(var i = 0; i < this.productosById.length; i++) {
    
      const descripcion = this.productosById[i].descripcion;
        this.nombre.push(descripcion);
    }
    for(var i = 0; i < this.nombre.length; i++) {
 
      const elemento = this.nombre[i];
     
      if (!this.nombreUnicos.includes(this.nombre[i])) {
        this.nombreUnicos.push(elemento);
      }
    }

    */

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
  getProducto(cod:Number){
    const busquedaById={idProducto:cod};
    this.filtroService.busqueda(busquedaById).subscribe(data =>{
      console.log(data);
      this.productosById=data;
      this.filtroService.DetalleProducto=data;
      this.ObtenerNombre();
      this.router.navigate(["/DetalleProducto"])
    })
  }
}
