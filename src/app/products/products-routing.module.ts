import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {PipesPageComponent} from "./pages/pipes-page/pipes-page.component";
import {PipesExamplePageComponent} from "./pages/pipes-example-page/pipes-example-page.component";
import {DirectivesPageComponent} from "./pages/directives-page/directives-page.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductPageComponent
  },
  {
    path: "posts",
    component: PostsPageComponent
  },
  {
    path: "pipes",
    component: PipesPageComponent
  },
  {
    path: "pipes-example",
    component: PipesExamplePageComponent
  },
  {
    path: "directives",
    component: DirectivesPageComponent
  },
  {
    path: "**",
    redirectTo: "products"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
