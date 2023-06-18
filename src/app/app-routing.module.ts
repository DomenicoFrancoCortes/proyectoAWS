import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';

import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { DestinosComponent } from './componentes/destinos/destinos.component';
import { EstacionesComponent } from './componentes/estaciones/estaciones.component';
import { DestinoComponent } from './componentes/destino/destino.component';
import { ActividadComponent } from './componentes/actividad/actividad.component';
import { EventoComponent } from './componentes/evento/evento.component';

const routes: Routes = [
  {path:'', component:DestinosComponent},
 // {path:'', component:HomeComponent},
  {path:'crear-usuario', component:CrearUsuarioComponent },
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'estaciones', component:EstacionesComponent},
  {path:'destinos', component:DestinosComponent},
  {path:'destino', component:DestinoComponent},
  {path:'actividad', component:ActividadComponent},
  {path:'evento', component:EventoComponent},
  //{path:'**', component:HomeComponent}
  {path:'**', component:DestinosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
