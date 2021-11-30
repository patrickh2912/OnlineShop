import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { DecoracionesComponent } from './vistas/Cliente/decoraciones/decoraciones.component';
import { DetalleProductoComponent } from './vistas/Cliente/detalle-producto/detalle-producto.component';
import { IngresarComponent } from './vistas/Cliente/ingresar/ingresar.component';

import { InicioComponent } from './vistas/Cliente/inicio/inicio.component';
import { ListaDecoracionesComponent } from './vistas/Cliente/lista-decoraciones/lista-decoraciones.component';
import { NosotrosComponent } from './vistas/Cliente/nosotros/nosotros.component';
import { PagoComponent } from './vistas/Cliente/pago/pago.component';
import { ProductosComponent } from './vistas/Cliente/productos/productos.component';
import { RegistrarComponent } from './vistas/Cliente/registrar/registrar.component';
import { RegistroEnvioComponent } from './vistas/Cliente/registro-envio/registro-envio.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'Productos',component:ProductosComponent},
  {path:'Nosotros', component:NosotrosComponent},
  {path:'DetalleProducto',component:DetalleProductoComponent},
  {path:'Ingresar',component:IngresarComponent},
  {path:'Envio',component:RegistroEnvioComponent},
  {path:'Decoraciones',component:DecoracionesComponent},
  {path:'VisualizarDecoraciones',component:ListaDecoracionesComponent},
  {path:'Pago',component:PagoComponent},
  {path:'Registrar',component:RegistrarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
