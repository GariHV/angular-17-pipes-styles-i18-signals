import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  public name: string =  ""
  public currentPrice: number =  0
  public isProductVisible: boolean = false

  constructor() {
    console.log('Contructor')
  }

  ngOnInit(): void {
    console.log('OnInit')
    this.loadFromLocalStorage()
  }

  ngDoCheck(): void {
    console.log('DoCheck')
    this.saveToLocalStorage()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('OnChanges')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')

  }

  saveToLocalStorage(){
    localStorage.setItem('price', JSON.stringify(this.currentPrice))
  }

  loadFromLocalStorage(){
    const savedLog = localStorage.getItem('price');
    if(savedLog){
      this.currentPrice = JSON.parse(savedLog)
    }
  }

  increasePrice(){
    this.currentPrice++;
  }

}
