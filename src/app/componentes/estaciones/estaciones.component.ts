import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinosService } from '../../services/destinos.service';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {

  constructor(
    public destinos: DestinosService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  irDestinos(estacion: string) {
    console.log(estacion);
    switch (estacion) {
      case 'V':
        this.destinos.destinoVerano = true;
        break;
      case 'I':
        this.destinos.destinoInvierno = true;
        break;
      case 'P':
        this.destinos.destinoPrimavera = true;
        break;
      case 'O':
        this.destinos.destinoOtono = true;
        break;
    }
    this.router.navigate(['/destinos']);
  }
}
