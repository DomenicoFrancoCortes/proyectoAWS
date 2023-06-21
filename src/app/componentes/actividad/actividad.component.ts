import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';
import { Actividad } from '../../models/actividad'
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  actividad: Actividad[];

  constructor(
    public destinosService: DestinosService,
    public favoritosService: FavoritosService
  ) { 
    this.actividad =[{
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      categoria: ''
    }];
  }

  ngOnInit(): void {
    this.actividad = this.destinosService.lugar.actividades.filter((act) => act.id === this.destinosService.actividadElegida);
  }

  guardarFavorito(id: number) {
    console.log("Favoritos antes: " + this.favoritosService.userFavorito.favoritos);

    //this.favoritosService.userFavorito.email = this.emailUsuario;
    this.favoritosService.userFavorito.favoritos.push(id);

    //Saca repetidos
    let sinRepetidos = this.favoritosService.userFavorito.favoritos.filter((item, index) => {
      return this.favoritosService.userFavorito.favoritos.indexOf(item) === index;
    })
    console.log("Sin repetidos: " + sinRepetidos); 
    
    //let favoritosUser = this.favoritosService.userFavorito.favoritos;
    let favoritosUser = sinRepetidos;
    
    console.log("Favoritos desp: " + favoritosUser);
    
    this.favoritosService.crearLista(this.favoritosService.userFavorito.email, favoritosUser);
   
    this.favoritosService.guardarFavoritos('https://9kqrh01hc4.execute-api.us-east-1.amazonaws.com/default/obtenerDato',
      `{"email": "${this.favoritosService.userFavorito.email}", "favoritos": [${this.favoritosService.userFavorito.favoritos}]}`).subscribe(respuesta => {
        console.log('comentario enviado');
      })
  }
}
