import { Component, OnInit } from "@angular/core";
import { Simpleproduct } from "./interfaces/produits";
import { CreateProduits } from "./données/produit.generator";
@Component({
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.css'],
  selector : 'app-root',
})
// Oninit permet de donner des directive à angular avant qu'il démarre
export class AppComponent implements OnInit{
produit! : Simpleproduct[];
// avnt fait ceci avec onInit
ngOnInit() {
  this.produit = CreateProduits(10);
  console.log(this.produit);
}
}