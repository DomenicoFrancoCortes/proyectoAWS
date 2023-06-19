import { Component, OnInit } from '@angular/core';
import { DestinosService } from '../../services/destinos.service';
import { Evento } from '../../models/evento'

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  evento: Evento[];

  constructor(
    public destinosService: DestinosService
  ) { 
    this.evento =[{
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      fecha: ''
    }];    
  }

  ngOnInit(): void {
    this.evento = this.destinosService.lugar.eventos.filter((eve) => eve.id === this.destinosService.eventoElegido);
  }

}
