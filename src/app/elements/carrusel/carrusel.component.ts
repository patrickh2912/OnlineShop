import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  @Input() ide!:string;
  @Input() ImgCarr!:any;
  @Input () identifier!:string;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.identifier='#'+this.ide;
  }

}
