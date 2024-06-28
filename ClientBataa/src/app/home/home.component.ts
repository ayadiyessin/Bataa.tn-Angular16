//

import { Component } from '@angular/core';
import { Produit } from 'src/Modeles/Produit';
import { EnchereService } from 'src/Services/enchere.service';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dateAujourdhui!: Date;
  constructor(private PS: ProduitService,private PHS:PhotoService,private ES:EnchereService) {
    this.dateAujourdhui = new Date();
  }
  idcourant: string[] = ['1','2'];
  idcourant1: string[] = ['3','4','5'];
  idcourant2: string[] = ['6','7','8'];
  dataa: Produit[] = [];
  nbproduit!:string;
  nb!:string[];
  nbt!:number;
  nbproduit1!:string;
  nb1!:string[];
  nbt1!:number;
  nbproduit2!:string;
  nb2!:string[];
  nbt2!:number;

  idprod!:string
  images!:String[]
  img!:String[]
  nbInfo!:number;
  nbim!:number;
  nbtrans!:number;

  OnLoud:boolean=false;
  OnLoud1:boolean=false;
  OnLoud2:boolean=false;
  
  ngOnInit(): void {


    this.GetCountProduitByScatMt();
    this.GetCountProduitByScatMi();
    this.GetCountProduitByScatI()


  }


GetCountProduitByScatMt() {
  this.nb = [];
  for (let i = 0; i < this.idcourant.length; i++) {
    this.PS.getCountProduitByScat(this.idcourant[i]).subscribe((result) => {
      this.nbproduit = result;
      console.log(this.nbproduit);
      this.nb.push(this.nbproduit);
      console.log(this.nb);
      
      this.GetCountProduitBycatMt();
    });
  }
}



GetCountProduitBycatMt() {
  this.nbt = 0;
  for (let i = 0; i < this.nb.length; i++) {
    const nbAsNumber = parseInt(this.nb[i]);
    this.nbt += nbAsNumber;
    console.log(this.nbt);
  }
  this.OnLoud=true;
}


GetCountProduitByScatMi() {
  this.nb1 = [];
  for (let i = 0; i < this.idcourant1.length; i++) {
    this.PS.getCountProduitByScat(this.idcourant1[i]).subscribe((result) => {
      this.nbproduit1 = result;
      console.log(this.nbproduit1);
      this.nb1.push(this.nbproduit1);
      console.log(this.nb1);
      this.GetCountProduitBycatMi();
    });
  }
}



GetCountProduitBycatMi() {
  this.nbt1 = 0;
  for (let i = 0; i < this.nb1.length; i++) {
    const nbAsNumber = parseInt(this.nb1[i]);
    this.nbt1 += nbAsNumber;
    console.log(this.nbt1);
  }
  this.OnLoud1=true;
}

GetCountProduitByScatI() {
  this.nb2 = [];
  for (let i = 0; i < this.idcourant2.length; i++) {
    this.PS.getCountProduitByScat(this.idcourant2[i]).subscribe((result) => {
      this.nbproduit2 = result;
      console.log(this.nbproduit2);
      this.nb2.push(this.nbproduit2);
      console.log(this.nb2);
      this.GetCountProduitBycatI();
    });
  }
}



GetCountProduitBycatI() {
  this.nbt2 = 0;
  for (let i = 0; i < this.nb2.length; i++) {
    const nbAsNumber = parseInt(this.nb2[i]);
    this.nbt2 += nbAsNumber;
    console.log(this.nbt2);
  }
  this.OnLoud2=true;
}




}






