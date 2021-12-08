import { Component, OnInit } from '@angular/core';
import { DetalleProducto } from 'src/app/Modelo/DetalleProducto';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoImagen } from 'src/app/Modelo/ProductoImagen';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';
import { ServicioCarritoService } from 'src/app/service/servicio-carrito.service';
import { ServicioDetalleProductoService } from 'src/app/service/servicio-detalle-producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  detalleProducto:Producto[]=[]
  productosImagenes:ProductoImagen[]=[]
  productosByCaract:any;
  modelo: String;
  color:String;
  precio:number;
  id:number=0;
  cantidad:number=1;
  producto:any;
  constructor(public detalleService:ServiceFiltroService, public imagenService:ServiceFiltroService,
    public DetalleProd:ServicioDetalleProductoService, public serviceCarrito:ServicioCarritoService) { 
    this.modelo=DetalleProd.modelo;
    this.color=DetalleProd.color;

    this.producto={
      idProducto:0,
      descripcion:'',
      costo:0
    }
  }
  obtenerProductoByCaract(p_modelo:String,p_color:String){
    console.log(this.DetalleProd.modelo);
    const datosProducto={
      modelo:p_modelo,
      color:p_color
    }
    this.DetalleProd.obtenerProductoByCaract(datosProducto).subscribe(data=>{
      console.log(data);
      this.productosByCaract=data;
    })
  }

   
    
 obtenerDatosByIdProducto(codigo:number){
    this.id=codigo;
    const product = {idProducto: codigo};
    this.DetalleProd.obtenerDatoProductoById(product).subscribe( data => {
      
      this.producto.idProducto=data.producto.idProducto;
      this.producto.descripcion=data.producto.descripcion;
      this.producto.costo=data.producto.costo;
      console.log(this.producto)
      
    })
  }


  
  /*
  login(){
    const user = {cuenta: this.usuario,contrasenia:this.password};
    this.serviceLogin.login(user).subscribe( data => {
      console.log(data);
      console.log(data.usuario)
      this.cuenta=data.usuario
      
      if(this.cuenta==null){
        alert("Usuario o password incorrecto, intentelo nuevamente");
      }
      else{
      alert(this.cuenta.cuenta)
      this.serviceLogin.nombreUsuario=this.cuenta.cuenta
      alert(this.nombre)
      this.router.navigate([""])}
    });
  }*/
/*--------------------------------LLENAR EL CARRITO DE COMPRA----------------------------------*/
public AniadirProducto(cod:number,nom:string,precio:number,num:number){
  this.serviceCarrito.CarritoCompra.push({idPedido:1,
  idProducto:cod,
  cantidad:num,
  descripcion:nom,
  precioUnitario:precio,
  precioTotal:precio*num,
  terminosCondiciones:'Pedido'})
  
  alert('Agregado')
  this.serviceCarrito.calcularMonto();
  this.serviceCarrito.calcularCantidad();
}





  ngOnInit(): void {
    /*this.detalleProducto=this.detalleService.DetalleProducto;
    this.nombre=this.detalleProducto[0].descripcion;*/
    console.log(this.DetalleProd.modelo);
    this.obtenerProductoByCaract(this.modelo,this.color);
    
    this.obtenerDatosByIdProducto(this.DetalleProd.id);
  }
  
  

}
