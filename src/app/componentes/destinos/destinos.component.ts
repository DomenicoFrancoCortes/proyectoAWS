import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinosService } from '../../services/destinos.service';
import { Destino } from '../../models/destino'

//Ini - Interface de listado de destinos
interface Idata {
  verano: Destino[];
  otono: Destino[];
  invierno: Destino[];
  primavera: Destino[];
}
//Fin - Interface de listado de destinos

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {

  data: any;
  lugares: Destino[];

  constructor(
    public destinosService: DestinosService,
    private router: Router
  ) {
    this.lugares = [{
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      actividades: [],
      eventos: []
    }];
  }

  ngOnInit(): void {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.destinosService.obtenerDestinos()
      .subscribe(
        (data) => {
          this.data = data;

          switch (true) {
            case this.destinosService.destinoInvierno:
              this.lugares = this.data.invierno;
              break;
            case this.destinosService.destinoPrimavera:
              this.lugares = this.data.primavera;
              break;
            case this.destinosService.destinoVerano:
              this.lugares = this.data.verano;
              break;
            case this.destinosService.destinoOtono:
              this.lugares = this.data.otono;
              break;
          }

          this.destinosService.lugares = this.lugares;

          console.log(this.lugares);
        },
        (error) => { console.log(error); }
      );
  }

  irDestino(destinoId: number) {
    console.log(destinoId);
    this.destinosService.lugarElegido = destinoId;
    this.router.navigate(['/destino']);
  }  
}
