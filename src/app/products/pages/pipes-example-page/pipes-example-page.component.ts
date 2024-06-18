import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example-page',
  templateUrl: './pipes-example-page.component.html',
  styleUrl: './pipes-example-page.component.css'
})
export class PipesExamplePageComponent {
 public person = {
   name: 'garikoitz herrero',
   gender: 'male',
   date: new Date(),
   currency: 1000
 }

 public invitationMap = {
   male: 'bienvenido',
   female: 'bienvenida'
 }

 onChangePerson(){
   this.person.name = 'anna';
   this.person.gender = 'female';
   this.person.date = new Date();
 }
}
