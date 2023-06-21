import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';
import { Evento } from '../../models/evento'
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  evento: Evento[];

  constructor(
    public destinosService: DestinosService,
    public favoritosService: FavoritosService
  ) { 
    this.evento =[{
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      fecha: ''
    }];    
  }

  ngOnInit(): void {
    this.evento = this.destinosService.lugar.eventos.filter((eve) => eve.id === this.destinosService.eventoElegido);
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
