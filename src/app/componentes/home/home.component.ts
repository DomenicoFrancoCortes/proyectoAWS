import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';
import { DestinosService } from '../../services/destinos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
    public destinosService: DestinosService
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.destinosService.obtenerDestinos()
      .subscribe(
        (data) => {
          this.data = data;
          this.destinosService.lugaresInvierno = this.data.invierno;
          this.destinosService.lugaresOtono = this.data.otono;
          this.destinosService.lugaresVerano = this.data.verano;
          this.destinosService.lugaresPrimavera = this.data.primavera;
          console.log(this.destinosService.lugaresInvierno);
        },
        (error) => { console.log(error); }
      );
  }

  private getUserDetails() {
    this.cognitoService.getUser().then((user: any) => {
      if (user) {
        //logueado
        console.log(user);
      } else {
        this.router.navigate(['/iniciar-sesion']);
      }
    })
  }

  signOutCognito() {
    this.cognitoService.signOut().then(() => {
      this.router.navigate(['/iniciar-sesion']);
    })
  }

  irDestinos(estacion: string) {
    console.log("Estacion: " + estacion);
    switch (estacion) {
      case 'V':
        this.destinosService.destinoVerano = true;
        this.destinosService.lugares = this.destinosService.lugaresVerano;
        break;
      case 'I':
        this.destinosService.destinoInvierno = true;
        this.destinosService.lugares = this.destinosService.lugaresInvierno;
        break;
      case 'P':
        this.destinosService.destinoPrimavera = true;
        this.destinosService.lugares = this.destinosService.lugaresPrimavera;
        break;
      case 'O':
        this.destinosService.destinoOtono = true;
        this.destinosService.lugares = this.destinosService.lugaresOtono;
        break;
    }
    this.router.navigate(['/destinos']);
  }
}
