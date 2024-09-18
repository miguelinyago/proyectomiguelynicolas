import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { ListaComponent } from './lista/lista.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  
  { path: 'producto', component: ProductoComponent},
{path:'lista', component: ListaComponent},
{path:'usuarios', component: UsuariosComponent}, 
 
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
