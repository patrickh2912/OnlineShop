import { Component, OnInit } from '@angular/core';
import { ServiceFiltroService } from 'src/app/service/service-filtro.service';
import { ServiceLoginService } from 'src/app/service/service-login.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  usuario:string
  password:string
  mensaje:any;
  Cuenta:any;
  idCaract:number;
  constructor(public serviceLogin:ServiceLoginService,public serviceFiltrar:ServiceFiltroService) { }

  ngOnInit(): void {
  }
  filtrar(){
    const filtro={idTipoCaracteristicasProducto:this.idCaract}
    this.serviceFiltrar.filtrar(filtro).subscribe( data => {
      console.log(data);
      
    });
  }
  login(){
    const user = {cuenta: this.usuario,contrasenia:this.password};
    this.serviceLogin.login(user).subscribe( data => {
      console.log(data);
      console.log(data.usuario)
      this.mensaje=data.usuario;
      this.Cuenta=data;
    });
  }
}
