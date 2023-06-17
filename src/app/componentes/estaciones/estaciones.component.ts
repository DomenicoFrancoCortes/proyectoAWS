import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {

  data: any;

  constructor(
    public destinos: DestinosService,
  ) { }

  ngOnInit() {
    this.ionViewDidLoad();
    console.log(this.data.verano);
  }

  ionViewDidLoad(){
    this.destinos.obtenerDestinos()
    .subscribe(
      (data)=> {this.data = data;
                console.log(JSON.stringify(data));
               },
      (error)=> {console.log(error);}
    );
  }  

}
