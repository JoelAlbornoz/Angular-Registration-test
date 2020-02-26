import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component'
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';

const routes: Routes = [{
  path:"", component: AltaClienteComponent,
},{
  path: 'altaclientes', component: AltaClienteComponent 
},{
  path: 'listadoclientes', component: ListadoClientesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
