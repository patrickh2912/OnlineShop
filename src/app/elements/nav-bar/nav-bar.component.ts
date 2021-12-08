import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Modelo/Categoria';
import { ProductoCategoria } from 'src/app/Modelo/ProductoCategoria';
import { ServiceDatoVistasService } from 'src/app/service/service-dato-vistas.service';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';
import { ServicioCarritoService } from 'src/app/service/servicio-carrito.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public cantidad:number=2
  public categorias:Categoria[]=[]
  
  constructor(public categService:ServiceDatoVistasService,public FiltroByCateg:ServiceFiltroService,public carritoService:ServicioCarritoService) { }

  ngOnInit(): void {
    this.obtenerCategorias()
  }
  obtenerCategorias(){
    
    this.categService.getCategoria().subscribe( data => {
      console.log(data);
      this.categorias=data;
    });
  }
  
  obtenerProductoByCategoria(codigoCategoria:number){
    const filtroCategoria={idCategoriaProductos:codigoCategoria}
    this.FiltroByCateg.obtenerProductoByCategoria(filtroCategoria).subscribe( data => {
      console.log(data);
      this.FiltroByCateg.productosByCateg=data;
      console.log(this.FiltroByCateg)
    });

  }
}
