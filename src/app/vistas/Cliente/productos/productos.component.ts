import { Component, OnInit } from '@angular/core';
import {Title,Meta} from '@angular/platform-browser';
import { Caracteristica } from 'src/app/Modelo/Caracteristica';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';
import { Router } from '@angular/router';
import { ProductoCaract } from 'src/app/Modelo/TipoProductoCaract';
import { ProductoCategoria } from 'src/app/Modelo/ProductoCategoria';
import { ServicioDetalleProductoService } from 'src/app/service/servicio-detalle-producto.service';
import { DetalleProducto } from 'src/app/Modelo/DetalleProducto';
import { ProductoFiltro } from 'src/app/Modelo/ProductoFiltro';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  
  tipoCaracteristicas:ProductoCaract[]=[]
  caracteristicas:Caracteristica[]=[]
  productos:ProductoCaract[]=[]
  productosById:Producto[]=[];
  nombre:any=[];
  nombreUnico:any;
  productosByCategoria:any;
  /*----------------------------------*/
  colores:DetalleProducto[]=[]
  tallas:DetalleProducto[]=[]
  /*-------------------------------------*/
  productosByFiltro:ProductoFiltro[]=[];
  tallaEscogida:String='';
  /*--------------obtener imagenes------------------*/
  imagenes:String[]=[]
  constructor(public filtroService:ServiceFiltroService, private router:Router, public DetalleProd:ServicioDetalleProductoService ) { 
    
  }

  ngOnInit(): void {
    this.obtenerCaracteristicas()
    this.obtenerTipoCaracteristicas();
    this.tallaEscogida='30'
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
    /*--------------------------------------------------------*/
  }
  /*---------------------------------------------------------*/
  obtenerProductosByFiltro(Nombrefiltro:String, tipoCaract:String){
    
    if(tipoCaract==='Talla'){
      this.tallaEscogida=Nombrefiltro;
    }
    const filtro={filtro:Nombrefiltro.toString(),talla:this.tallaEscogida};
    this.filtroService.obtenerProductosByFiltro(filtro).subscribe(data=>{
      console.log(data);
      this.productosByFiltro=data;
    })
    setTimeout(() => {
      this.filtroService.productosByCateg=this.productosByFiltro;
     }, 800);
     setTimeout(() => {
      this.aniadirImagenes();
     }, 300);
    
   
  }
  obtenerCaracteristicasProdById(codProducto:number,rutaImagen:String){
    const codigo={
      idProducto:codProducto
    }
    this.DetalleProd.obtenerCaracteristicasProdById(codigo).subscribe(data=>{
      console.log(data);
      this.DetalleProd.id=codProducto;
      this.DetalleProd.modelo=data[0].tipoAplicacion;
      this.DetalleProd.Talla=data[1].tipoAplicacion;
      this.DetalleProd.color=data[2].tipoAplicacion;
      console.log(this.DetalleProd.color)
      console.log(this.DetalleProd.modelo)
      console.log(this.DetalleProd.Talla)
    })
    setTimeout(() => {
      this.router.navigate(["/DetalleProducto"]);
     }, 800);
    this.DetalleProd.imagenReferencial=rutaImagen;
  }
 




  /*-----------------------------------------------------------*/
  /*---------------------------------------------------------*/
  obtenerColores(nombreModelo:String){
    const modelo={modelo:nombreModelo};
    this.DetalleProd.obtenerColores(modelo).subscribe( data => {
      console.log(data);
      this.DetalleProd.colores=data;
      console.log(this.colores)
      
    });
    this.router.navigate(["/DetalleProducto"])
  }
  obtenerTallas(nombreModelo:String){
    const modelo={modelo:nombreModelo};
    this.DetalleProd.obtenerTallas(modelo).subscribe( data => {
      console.log(data);
      this.DetalleProd.tallas=data;
      console.log(this.tallas)
      
    });
    
  }
  obtenerDetalleModeloProducto(codProducto:number){
    const codigo={idProducto:codProducto};
    this.DetalleProd.obtenerPreciosProducto(codigo).subscribe(data=>{
      console.log;
      this.DetalleProd.detalleProducto=data;
    })
    this.router.navigate(["/DetalleProducto"])
  }
  /*-------------------------------------------------------------*/
  

  /*------------------------------------------------------------*/
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
  /*-----------------------------aun sin implementar---------------------------*/
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
  /*--------------------------------------------------------------------*/
  asignarImagenes(idCategoria:number){
    if(idCategoria>=1 && idCategoria<=18){
      return "./assets/Productos/producto1_1.jpg";
    }
    else if(idCategoria>=19 && idCategoria<=34){
      return "./assets/Productos/producto2_1.jpg";
    }
    else if(idCategoria>=35 && idCategoria<=59){
      return "./assets/Productos/producto3_1.jpg";
    }
    else if(idCategoria>=60 && idCategoria<=89){
      return "./assets/Productos/producto4_1.jpg";
    }
    else if(idCategoria>=90 && idCategoria<=98){
      return "./assets/Productos/producto5_1.jpg";
    }
    else{
      return "./assets/Productos/producto6_1.jpg";
    }
    
    
  }
  aniadirImagenes(){
    
    for (let i = this.imagenes.length; i > 0; i--) {
      this.imagenes.pop();
    }
    setTimeout(() => {
      for(var i = 0; i < this.filtroService.productosByCateg.length; i++) {
        this.imagenes[i]=this.asignarImagenes(this.filtroService.productosByCateg[i].idProducto)
        
      };
     }, 400);
    
  }
  
  /*
  for(var i = 0; i < this..length; i++) {
    
    const descripcion = this.productosById[i].descripcion;
      this.nombre.push(descripcion);
  }
  
  }*/
}
