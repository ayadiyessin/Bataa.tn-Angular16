import { Component } from '@angular/core';
import { Produit } from 'src/Modeles/Produit';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css']
})
export class TelephoneComponent {
  constructor(private PS:ProduitService,private PHS: PhotoService) {}
  idcourant: string[] = ['3', '4','5'];
  // idcourant: string = '';
  dataa!:Produit[]
  nbproduit!:string;
  nb!:string[];
  produitsRechercher!: string;
  etatProduit:string = 'tous';

  idprod!: string;
  images!: String[];
  img!: String[];
  OnLoud:boolean=false;
  OnLoud1:boolean=false;

  ngOnInit(): void {
    this.GetProduitByScat();
    this.GetCountProduitByScat()

  }
  GetProduitByScat() {
    // this.idcourant = "1";
    this.PS.getProduitsNonValiderBySCategorie(this.idcourant[1]).subscribe((result) => {
      this.dataa = result;
      console.log(this.dataa);
      this.getImagebyproduit(this.dataa);
    });
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
    if(this.etatProduit=="tous"){
      this.GetProduitByScat()
    }
    else{
      this.PS.rechercheProduit(this.idcourant[1], this.etatProduit)
      .subscribe(
        (data) => {
          if(data.length==0){
            Swal.fire({
              title: '',
              text: 'Désolé, aucun produit correspond à votre recherche',
              icon: 'warning',
              confirmButtonText: 'Ok'
            }).then((result) => {
              if (result.isConfirmed) {
                this.etatProduit="tous"
                this.GetProduitByScat();
              }
            });
          }
          else{
            this.dataa = data;
            this.getImagebyproduit(this.dataa)
          }

          console.log(data); // Pour vérifier les données récupérées dans la console
        },
        (error) => {
          console.error('Une erreur s\'est produite : ', error);
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
