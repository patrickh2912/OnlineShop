import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parte } from 'src/app/Modelo/Parte';
import { RegistrarServiceService } from 'src/app/service/registrar-service.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
    parte!:Parte;
    idParte!:number;
    nombre!:String;
    apellido!:String;
    fechaNacimiento!:Date;
    tipoUsuario!:String;
    cuenta!:String;
    password!:String;
    genero!:String;
  constructor(public registroService:RegistrarServiceService, public router:Router) {
    
   }

  ngOnInit(): void {
    
  }
  RegistrarParte(){
    const parte={
      idParte:0,
      cuenta:this.cuenta,
      contrasenia:this.password,
      nombres:this.nombre,
      apellidos:this.apellido,
      idCuentasUsuario:0,
      genero:this.genero,
      tipo:this.tipoUsuario,
      fechaNacimiento:this.fechaNacimiento
      
    };
    
    this.registroService.registrarParte(parte).subscribe(
      data => {
        console.log(data);
        this.parte=data.usuario;
        console.log(this.parte)
        alert("usuario registrado"+"  "+ "BIENVENIDO:"+" "+this.parte.nombres);
        this.router.navigate([""])
      }
    )
    
  }

}
