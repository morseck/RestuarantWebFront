import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  //variable pour le chemin http
  public host: string = "http://localhost:8087";

  constructor(private http:HttpClient) { }

  //methode pour afficher toutes les categories
  getAllCategories(){
      return this.http.get(this.host+"/categories");
  }

  //methodes pour afficher les ressources
  getRessource(url){
    return this.http.get(url);
  }

}
