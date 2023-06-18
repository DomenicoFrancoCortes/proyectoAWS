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

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
    public destinos: DestinosService
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
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
