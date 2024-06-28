import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/Modeles/Produit';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';

@Component({
  selector: 'app-tous-transport',
  templateUrl: './tous-transport.component.html',
  styleUrls: ['./tous-transport.component.css']
})
export class TousTransportComponent implements OnInit {
  constructor(private PS: ProduitService,private PHS: PhotoService) {}

  idcourant: string[] = ['1', '2'];
  dataa: Produit[] = [];
  nbproduit!:string;
  nb!:string[];

  idprod!: string;
  images!: String[];
  img!: String[];
  OnLoud:boolean=false;
  OnLoud1:boolean=false;
  ngOnInit(): void {
    this.GetProduitByScat();
    this. GetCountProduitByScat()
  }

  GetProduitByScat() {
    for (let i = 0; i < this.idcourant.length; i++) {
      this.PS.getProduitsNonValiderBySCategorie(this.idcourant[i]).subscribe((result) => {
        this.dataa = this.dataa.concat(result);

        console.log(this.dataa);
        this.getImagebyproduit();
      });
    }
    
  }

  GetCountProduitByScat() {
    this.nb = [];
    for (let i = 0; i < this.idcourant.length; i++) {
      this.PS.getCountProduitByScat(this.idcourant[i]).subscribe((result) => {
        this.nbproduit = result;
        console.log(this.nbproduit);
        this.nb.push(this.nbproduit);
        console.log(this.nb);
      });
    }
    this.OnLoud1=true;
  }

  getImagebyproduit() {
    this.img = [];
    for (let i = 0; i < this.dataa.length; i++) {
      this.idprod = this.dataa[i].id;
      this.PHS.getimagebyproduit(this.idprod).subscribe((result) => {
        this.images = result;
        this.img.push(this.images[0]);
        console.log('image', this.img);
      });
    }
    this.OnLoud=true;
  }


}

