import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  constructor(
    public http: HttpClient
  ) { }

  obtenerDestinos(){
    console.log('haciendo GET a API destinos');
    //return this.http.get('https://nextripjson.s3.amazonaws.com/json/destinos.json');
    return this.http.get('https://proyectonube89.s3.amazonaws.com/json/destinos.json');
  }
}
