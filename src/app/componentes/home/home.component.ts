import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private cognitoService: CognitoService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }
private getUserDetails(){
  this.cognitoService.getUser().then((user:any)=>{
if(user){
  //logueado
  console.log(user);
}else{
  this.router.navigate(['/iniciar-sesion']);
}
  })
}
signOutCognito(){
  this.cognitoService.signOut().then(()=>{
    this.router.navigate(['/iniciar-sesion']);
  })
}

}
