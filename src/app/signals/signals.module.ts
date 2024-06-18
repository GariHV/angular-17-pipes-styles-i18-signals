import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';
import {RouterOutlet} from "@angular/router";
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import {SignalsRoutingModule} from "./signals-routing.module";
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';



@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    SideMenuComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
