import { Component } from '@angular/core';
import { Caracteristica } from './Modelo/Caracteristica';
import { ServiceFiltroService } from './service/service-filtro.service';
import { ServiceLoginService } from './service/service-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineShop';
  dato:String=" "
  //productos:Producto[]=[]
  constructor(public loginService:ServiceLoginService, public busquedaService:ServiceFiltroService) { 
    this.loadScripts(); 
  }
  buscar(){
    const user = {cuenta: this.dato};
    this.busquedaService.busqueda(user).subscribe( data => {
      console.log(data);
      console.log(data.usuario)
      
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
 } } }
