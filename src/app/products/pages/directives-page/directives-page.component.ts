import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrl: './directives-page.component.css'
})
export class DirectivesPageComponent {

  private fb: FormBuilder = inject(FormBuilder)

  public color: string = 'green'

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
