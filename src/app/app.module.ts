import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './elements/nav-bar/nav-bar.component';
import { CarruselComponent } from './elements/carrusel/carrusel.component';
import { InicioComponent} from './vistas/Cliente/inicio/inicio.component';
import { ProductosComponent } from './vistas/Cliente/productos/productos.component';
import { CardProductComponent } from './elements/card-product/card-product.component';
import { NosotrosComponent } from './vistas/Cliente/nosotros/nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './elements/footer/footer.component';
import { DetalleProductoComponent } from './vistas/Cliente/detalle-producto/detalle-producto.component';
import { PagoComponent } from './vistas/Cliente/pago/pago.component';
import { RegistroEnvioComponent } from './vistas/Cliente/registro-envio/registro-envio.component';
import { VisualizarPedEspecialComponent } from './vistas/Admin/PedidoEspecial/visualizar-ped-especial/visualizar-ped-especial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresarComponent } from './vistas/Cliente/ingresar/ingresar.component';
import { LoginComponent } from './components/login/login.component';
import { DecoracionesComponent } from './vistas/Cliente/decoraciones/decoraciones.component';
import { ListaDecoracionesComponent } from './vistas/Cliente/lista-decoraciones/lista-decoraciones.component';
import { CarritoComponent } from './vistas/Cliente/carrito/carrito.component';
import { RegistrarComponent } from './vistas/Cliente/registrar/registrar.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarruselComponent,
    InicioComponent,
    ProductosComponent,
    CardProductComponent,
    NosotrosComponent,
    FooterComponent,
    DetalleProductoComponent,
    PagoComponent,
    RegistroEnvioComponent,
    VisualizarPedEspecialComponent,
    IngresarComponent,
    LoginComponent,
    DecoracionesComponent,
    ListaDecoracionesComponent,
    CarritoComponent,
    RegistrarComponent,
    FormRegistroComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
