import {Component, computed, effect, OnInit, signal} from '@angular/core';
import {UserData} from "../../interfaces/user-info.interface";

@Component({
  selector: 'properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit{

  public counter = signal(10)
  public user = signal({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  })

  public userChangeEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`)
  })

  public fullName = computed(() =>
    `${this.user().first_name} ${this.user().last_name}`
  )

  ngOnInit(): void {
/*    setInterval(()=>{
      this.counter.update(current => current + 1)
      if(this.counter() === 15){
        this.userChangeEffect.destroy()
      }
    }, 1000)*/
    console.log('texto de prueba')
  }

  increasedBy(value: number){
    this.counter.update(current => current + value)
  }

  onFieldUpdate(field: keyof UserData, value: string){
/*    this.user.set({
      ...this.user(),
      [field]: value
    })*/

    this.user.update(current => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
      }
      return current
    })
    console.log(this.user())
  }

}
