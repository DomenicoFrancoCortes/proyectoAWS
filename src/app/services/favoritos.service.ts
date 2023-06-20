import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorito } from '../models/favorito';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  
  public userFavorito: Favorito = {
    email: '',
    favoritos: []
  };

  constructor(public http: HttpClient) { }

  obtenerFavoritos(email:string ) {
    console.log('obtener favoritos');
    let emailEditado = email.replace('@', '%40');
    console.log(emailEditado);
    
    return this.http.get('https://nextripjson.s3.amazonaws.com/json/' + emailEditado +'.json');
  }
  guardarFavoritos(url:string, body:any){
    return this.http.post(url,body);
      }
}


