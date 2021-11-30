import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-decoraciones',
  templateUrl: './lista-decoraciones.component.html',
  styleUrls: ['./lista-decoraciones.component.css']
})
export class ListaDecoracionesComponent implements OnInit {
  public ListaProductos:any;
  constructor() {
      this.ListaProductos=[
        {
          imagen:'./assets/imagenes/Decoraciones/decoracion1.jpg',
          nombre:'DECORACIÓN01',
          precio:10.49
        },
        {
          imagen:'./assets/imagenes/Decoraciones/decoracion2.jpg',
          nombre:'DECORACIÓN02',
          precio:7.99
        },
        {
          imagen:'./assets/imagenes/Decoraciones/decoracion3.jpg',
          nombre:'DECORACIÓN03',
          precio:19.99
        },
      ]
   }
  ngOnInit(): void {
  }

}
