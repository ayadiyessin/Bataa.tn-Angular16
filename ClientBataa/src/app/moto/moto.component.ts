
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/Modeles/Produit';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css'],
})
export class MotoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private PS: ProduitService,
    private PHS: PhotoService,
    private router: Router
  ) {}
  // idcourant!: string;
  idcourant: string[] = ['1', '2'];
  dataa!: Produit[];
  nbproduit!: string;
  nb!: string[];
  produitsRechercher!: string;
  etatProduit: string = 'tous';

  idprod!: string;
  images!: String[];
  img!: String[];
  OnLoud:boolean=false;
  OnLoud1:boolean=false;

  ngOnInit(): void {
    this.GetProduitByScat();
    this.GetCountProduitByScat();
  }

  GetProduitByScat() {
    this.PS.getProduitsNonValiderBySCategorie(this.idcourant[0]).subscribe(
      (result) => {
        this.dataa = result;
        console.log('dataa2', this.dataa);
        this.getImagebyproduit(this.dataa);
      }
    );
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
  GetrechercherProduits() {
    // Si etatProduit est null, ne pas effectuer de recherche
    // if (!this.etatProduit) {
    //   return;
    // }
    console.log(this.etatProduit);
    // Appel de la fonction de recherche avec l'état actuel du produit
    if (this.etatProduit == 'tous') {
      this.GetProduitByScat();
    } else {
      this.PS.rechercheProduit(this.idcourant[0], this.etatProduit).subscribe(
        (data) => {
          if (data.length == 0) {
            Swal.fire({
              title: '',
              text: 'Désolé, aucun produit correspond à votre recherche',
              icon: 'warning',
              confirmButtonText: 'Ok',
            }).then((result) => {
              if (result.isConfirmed) {
                this.etatProduit = 'tous';
                this.GetProduitByScat();
              }
            });
          } else {
            this.dataa = data;
            this.getImagebyproduit(this.dataa)
          }

          console.log(data); // Pour vérifier les données récupérées dans la console
        },
        (error) => {
          console.error("Une erreur s'est produite : ", error);
        }
      );
    }
  }


  getImagebyproduit(ressource:Produit[]) {
    this.img = [];
    for (let i = 0; i < ressource.length; i++) {
      this.idprod = ressource[i].id;
      this.PHS.getimagebyproduit(this.idprod).subscribe((result) => {
        this.images = result;
        this.img.push(this.images[0]);
        console.log('image', this.img);
      });
    }
    this.OnLoud=true;
  }
}
