import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';
import { Router } from '@angular/router';
import { Destino } from '../../models/destino'

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {

  destino: Destino[];

  constructor(
    public destinosService: DestinosService,
    private router: Router
  ) {
    this.destino = [{
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      actividades: [],
      eventos: []
    }]
   }

  ngOnInit(): void {
    this.destino = this.destinosService.lugares.filter((lugar) => lugar.id === this.destinosService.lugarElegido);
    this.destinosService.lugar = this.destino[0];
    console.log("Destino :" + this.destino.toString);
  }

  irActividad(actividadId: number) {
    console.log("Actividad Id: " + actividadId);
    this.destinosService.actividadElegida = actividadId;
    this.router.navigate(['/actividad']);
  } 

  irEvento(eventoId: number) {
    console.log("Evento Id: " + eventoId);
    this.destinosService.eventoElegido = eventoId;
    this.router.navigate(['/evento']);
  }   
}
