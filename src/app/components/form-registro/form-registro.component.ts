import { Component, OnInit } from '@angular/core';
import { Parte } from 'src/app/Modelo/Parte';
import { RegistrarServiceService } from 'src/app/service/registrar-service.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
    parte:Parte;
    idParte:number;
    tipo:String;
    nombre:String;
    apellido:String;
    fechaNacimiento:Date;
    edad:number;
    genero:String;
  constructor(public registroService:RegistrarServiceService) {
    this.edad=12;
    this.tipo="cliente"
   }

  ngOnInit(): void {
    
  }
  RegistrarParte(){
    const parte={
      idParte:this.idParte,
      tipo:this.tipo,
      nombre:this.nombre,
      apellido:this.apellido,
      fechaNacimiento:this.fechaNacimiento,
      edad:18,
      genero:this.genero
      
    };
    this.registroService.registrarParte(parte).subscribe(
      data => {
        console.log(data);
        alert("hola mundo");
      }
    )
    alert("usuario registrado")
  }

}
