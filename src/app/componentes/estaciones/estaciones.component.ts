import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';

//Ini - Interface de listado de destinos
interface Actividad {
  id:	number;
  nombre: string;
  desc: string;
  imagen: string;
  categoria: string;
}

interface Evento {
  id:	number;
  nombre: string;
  desc: string;
  imagen: string;
  fecha: string;
}

interface Destino {
  id:	number;
  nombre: string;
  desc: string;
  imagen: string;
  actividades: Actividad[];
  eventos: Evento[];
}

interface Idata {
  verano: Destino[];
  otono: Destino[];
  invierno: Destino[];
  primavera: Destino[];
}
//Fin - Interface de listado de destinos

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {

  data: any;
  data2: Idata | undefined;
  verano!: Destino[] | undefined;
  otono!: Destino[] | undefined;
  primavera!: Destino[] | undefined;
  invierno!: Destino[] | undefined;

  constructor(
    public destinos: DestinosService
  ) { }

  ngOnInit() {
    this.ionViewDidLoad();
    console.log(this.data.verano);
  }

  ionViewDidLoad(){
    this.destinos.obtenerDestinos()
    .subscribe(
      (data)=> {this.data = data;
                this.data2 = this.data;
                this.verano = this.data2?.verano;
                this.invierno = this.data2?.invierno;
                this.primavera = this.data2?.primavera;
                this.otono = this.data2?.otono;
                console.log(this.verano);
                //console.log(JSON.stringify(data));
               },
      (error)=> {console.log(error);}
    );
  }  

}
