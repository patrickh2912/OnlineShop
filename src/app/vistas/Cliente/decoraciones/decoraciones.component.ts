import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decoraciones',
  templateUrl: './decoraciones.component.html',
  styleUrls: ['./decoraciones.component.css']
})
export class DecoracionesComponent implements OnInit {
  public RangoPrecios: any;
  Materiales:string[]=[
    'Denim de algodón serge',
    'Denim crud',
    'Denim de orillo',
    'Denim elástico',
    'Denim de poliéster',
    'Denim orgánico'
  ]
  Colors:string[]=[
    'Negro',
    'Blanco',
    'Plomo',
    'Dorado',
    'Plateado',
    'Azul'
  ]
  Posiciones:string[]=[
    'Scallop',
    'Presillas',
    'Yoke',
    'Dobladillo',
    'Bolsas de parche',
    'Cuerpo de bota',
    'Bolsa vaquera'
  ]
  ModelosJeans:string[]=[
    'Reta',
    'Skinny',
    'Jenning',
    'Capri',
    'Boot Cut',
    'Flare',
    'Pantalona'
  ]
  
  constructor() { 
    this.RangoPrecios=[
      {
        Minimo:0,
        Maximo:15,
      },
      {
        Minimo:16,
        Maximo:30,
      },
      {
        Minimo:31,
        Maximo:45,
      },
      {
        Minimo:46,
        Maximo:60,
      },
    ]
  }
  ngOnInit(): void {
  }

}
