import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Produit } from 'src/Modeles/Produit';
import { EnchereService } from 'src/Services/enchere.service';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';

@Component({
  selector: 'app-modal-produit',
  templateUrl: './modal-produit.component.html',
  styleUrls: ['./modal-produit.component.css']
})
export class ModalProduitComponent {
  dataa!:Produit
  idcourant!:string
  images!: String[]
  prix!:number
  AffichePrix!:number
constructor(public dialogRef: MatDialogRef<ModalProduitComponent>,@Inject(MAT_DIALOG_DATA) data:any,private PS:ProduitService,private PHS:PhotoService,private router: Router,private ES:EnchereService) 
{
  this.idcourant= data.id ;
}
  ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
    //recuperer l'id de url
    
    // console.log(this.idcourant)
    if(!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
    {
      this.PS.getProduitById(this.idcourant).subscribe((result)=>{
        this.dataa=result;
        console.log(this.dataa)
        console.log(this.dataa.utilisateurID);
        this.prix = Math.round(this.dataa.prix_unitaire * 1.1);
        //this.prix = this.dataa.prix_unitaire +(this.dataa.prix_unitaire*0.1);
        console.log(this.prix);
      })
      this.getImagebyproduit();
      this.getPrixEnch();

    }

  }
  getPrixEnch()
  {
    this.ES.getMaxPrixEnchere(this.idcourant).subscribe((result)=>{
        this.AffichePrix = result;
        console.log(this.AffichePrix);
        this.prix = Math.round(this.AffichePrix * 1.1);
        console.log(this.prix);
    })
  }

  // images = ['assets/dist/img/4.png','assets/dist/img/4.png' ,'assets/dist/img/4.png'
  // ];
  getImagebyproduit(){
    this.PHS.getimagebyproduit(this.idcourant).subscribe((result)=>{
      console.log('Données reçues du service :', result);
      this.images = result;
      console.log('Images après mapping :', this.images);
    })
  }
  

// Index de l'image actuellement affichée
currentImageIndex: number = 0;

get currentImageSrc(): String {
  if (this.images.length > 0 && this.images[this.currentImageIndex]) {
    return this.images[this.currentImageIndex];
  } else {
    return '';
  }
}

// Afficher l'image précédente
showPreviousImage() {
  this.currentImageIndex = (this.currentImageIndex === 0) ? this.images.length - 1 : this.currentImageIndex - 1;
}

// Afficher l'image suivante
showNextImage() {
  this.currentImageIndex = (this.currentImageIndex === this.images.length - 1) ? 0 : this.currentImageIndex + 1;
}
close(){
  this.dialogRef.close();
}
}
