import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import { CustomLabelDirective } from './directives/custom-label.directive';
import {RouterLink, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    SideMenuComponent,
    CustomLabelDirective
  ],
  exports: [
    SideMenuComponent,
    CustomLabelDirective
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatToolbarModule,
    MatIcon,
    MatIconButton,
    RouterLink,
    RouterOutlet
  ]
})
export class SharedModule { }
