import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/Modelo/Cuenta';
import { ServiceLoginService } from 'src/app/service/service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string
  password:string
  cuenta:Cuenta;
  nombre:string
  constructor(private router:Router,public serviceLogin:ServiceLoginService,) {
    
   }

  ngOnInit(): void {
    
  }
  /*
  getMenuJsonContent(data:any)
    return (data as any).Menu; // aqui obtenemos el array de elementos de la propiedad Menu
  }*/
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
  }
}
