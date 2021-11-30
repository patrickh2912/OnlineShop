import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caracteristica } from 'src/app/Modelo/Caracteristica';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  constructor(private servicio:ServicioService, private router:Router) {
    
  }
  ngOnInit(): void {
   /* this.servicio.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })*/
  }
  /*
  productos:Producto[]
  constructor(private servicio:ServicioService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.servicio.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }
*/
}
