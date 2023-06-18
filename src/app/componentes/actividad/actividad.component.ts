import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';
import { Actividad } from '../../models/actividad'

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  actividad: Actividad[];

  constructor(
    public destinosService: DestinosService
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

}
