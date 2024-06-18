import { Component } from '@angular/core';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrl: './pipes-page.component.css'
})
export class PipesPageComponent {

  public name: string = 'gAriKoitZ HerRero'

  public customDate: Date = new Date()

  public totalSells: number = 2567789.5567;

  public percent: number = 0.485655555;

  public gender: 'male'|'female' = 'male'

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'anna herrero';
    this.gender = 'female'
  }

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Melisa']
  public clientsMap = {
    '=0': 'no tenemos clientes a la espera',
    '=1': ' tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift()
  }

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Barcelona, España'
  }

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos datos en la promesa');
      console.log('Tenemos datos en la promesa');
      this.person.name = 'Otro nombre';
      this.person.age = 50000;
      this.person.address = 'Madrid, España'
    }, 3500)
  })
}
