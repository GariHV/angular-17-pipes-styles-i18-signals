import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})

export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription


  ngOnInit(){
    console.log('Componente HIJO: ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Componente HIJO: ngOnChanges')
    console.log({changes})
  }

  ngOnDestroy() {
    console.log('Componente HIJO: ngOnDestroy')
    this.interval$?.unsubscribe()
  }

}
