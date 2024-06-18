import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PriceComponent } from './components/price/price.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import {MatList, MatListItem} from "@angular/material/list";
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';
import { PipesExamplePageComponent } from './pages/pipes-example-page/pipes-example-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DirectivesPageComponent } from './pages/directives-page/directives-page.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ProductPageComponent,
    PriceComponent,
    PostsPageComponent,
    PipesPageComponent,
    PipesExamplePageComponent,
    DirectivesPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatList,
    MatListItem,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
