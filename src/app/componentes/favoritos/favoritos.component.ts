import { Component, OnInit } from '@angular/core';
import { DestinosService } from 'src/app/services/destinos.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public ids: number[] = [];
  public nombres: string[] = [];

  constructor(
    public destinosService: DestinosService,
    public favoritosService: FavoritosService
  ) { }

  ngOnInit(): void {
    this.cargarFavoritos();
  }

  cargarFavoritos() {

    //Saca repetidos
    let sinRepetidos = this.favoritosService.userFavorito.favoritos.filter((item, index) => {
      return this.favoritosService.userFavorito.favoritos.indexOf(item) === index;
    })
    console.log("Sin repetidos: " + sinRepetidos);

    for (let i = 0; i < sinRepetidos.length; i++) {
      this.ids[i] = sinRepetidos[i];
    }
  }
}
