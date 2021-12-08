import { Component, OnInit } from '@angular/core';
import { ProductoModelo } from 'src/app/Modelo/ProductoModelo';
import { ServiceDatoVistasService } from 'src/app/service/service-dato-vistas.service';
import { ServiceLoginService } from 'src/app/service/service-login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario!:string
  password!:string
  imagenes:any;
  productosModelo:ProductoModelo[]=[]
  constructor(public serviceLogin:ServiceLoginService,public serviceModeloVista:ServiceDatoVistasService) { 
    this.imagenes=['./assets/Productos/producto2_3.jpg','./assets/Productos/producto1_1.jpg','./assets/Productos/producto3_1.jpg',
    './assets/Productos/producto4_1.jpg','./assets/Productos/producto5_1.jpg','./assets/Productos/producto6_1.jpg']
  }

  ngOnInit(): void {
    this.loadScripts()
    this.obtenerModelos()
  }
  /*
  login(){
    const user = {cuenta: this.usuario};
    this.serviceLogin.login(user).subscribe( data => {
      console.log(data);
    });
  }*/
  obtenerModelos(){
    this.serviceModeloVista.getModelos().subscribe( data => {
      console.log(data);
      this.productosModelo=data;
    });
  }
  
  loadScripts() { 

    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
        'assets/js/vendor/jquery-3.3.1.min.js',
        'assets/js/vendor/modernizr-3.6.0.min.js',
        'assets/js/vendor/jquery.cookie.js',
        'assets/js/vendor/wow.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/plugins.js',
        'assets/js/popper.min.js',
        'assets/js/lazysizes.js',
        'assets/js/main.js',
        
       //Load all your script files here'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } } 
}
