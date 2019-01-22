import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from './produits/produits.component';
import {LoginComponent} from './login/login.component';
import {CategoriesComponent} from './categories/categories.component';
import {MenusComponent} from './menus/menus.component';

//Definition des routes
const routes: Routes = [
  {path: "products/:urlProds", component: MenusComponent},
  {path: "login", component:LoginComponent},
  {path: "", component:LoginComponent},
  {path: "categories", component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
