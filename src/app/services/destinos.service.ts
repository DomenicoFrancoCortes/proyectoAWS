import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destino } from '../models/destino'

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  public destinoVerano: boolean;
  public destinoPrimavera: boolean;
  public destinoOtono: boolean;
  public destinoInvierno: boolean;
  public lugares: Destino[];
  public lugar: Destino;
  public lugarElegido: number;
  public actividadElegida: number;
  public eventoElegido: number;


  constructor(
    public http: HttpClient
  ) {
    this.destinoVerano = false;
    this.destinoInvierno = false;
    this.destinoOtono = false;
    this.destinoPrimavera = false;
    this.lugarElegido = 0;
    this.actividadElegida = 0;
    this.eventoElegido = 0;
    this.lugares = [{
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      actividades: [],
      eventos: []
    }];
    this.lugar ={
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      actividades: [],
      eventos: []
    }
  }

  obtenerDestinos() {
    console.log('haciendo GET a API destinos');
    //return this.http.get('https://nextripjson.s3.amazonaws.com/json/destinos.json');
    return this.http.get('https://proyectonube89.s3.amazonaws.com/json/destinos.json');
  }
}
