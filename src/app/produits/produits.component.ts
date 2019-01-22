import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  products;//variable pour la liste des produits

  constructor(private catalogueService: CatalogueService, private route: ActivatedRoute, private router: Router) {

    router.events.subscribe(event=>{
      if (event instanceof NavigationEnd){
        //console.log(this.route.snapshot.params.urlProds);
        let url = atob(this.route.snapshot.params.urlProds);
        //console.log(url);
        this.getProducts(url);

      }
    });


  }

  ngOnInit() {
  }

  getProducts(url){
    this.catalogueService.getRessource(url)
      .subscribe(data=>{
        this.products = data;
      }, err =>{
       console.log(err);
      });

  }

}
