import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories; //variables pour la liste des categories
  currentCategory; //categorie actuelle


  //nous avons besoin des catalogues service et des routes
  constructor(private catService: CatalogueService, private router: Router) { }


  //Au moment de l'initialisation
  ngOnInit() {
    this.catService.getAllCategories()
      .subscribe(data=>{
        this.categories = data;
      },err =>{
        console.log(err);
      })
  }

  //Methodes pour voire la listes des produits quand on clique sur une categories
  onGetProducts(cat){
    this.currentCategory = cat;
    let url = cat._links.products.href;
    this.router.navigateByUrl("/products/"+btoa(url));
  }



}
