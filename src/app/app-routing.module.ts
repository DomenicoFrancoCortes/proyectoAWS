import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';

import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'crear-usuario', component:CrearUsuarioComponent },
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'**', component:CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
