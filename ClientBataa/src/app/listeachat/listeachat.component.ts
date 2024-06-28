import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Enchere } from 'src/Modeles/Enchere';
import { EnchereService } from 'src/Services/enchere.service';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import { ModalProduitComponent } from '../modal-produit/modal-produit.component';

@Component({
  selector: 'app-listeachat',
  templateUrl: './listeachat.component.html',
  styleUrls: ['./listeachat.component.css']
})
export class ListeachatComponent implements OnInit{
  constructor(
    private PS: ProduitService,
    private ES: EnchereService,
    private PHS: PhotoService,
    private router: Router,
    private dialog:MatDialog
  ) {}

  dataa: Enchere[] = []; // Correction : initialiser dataa comme un tableau vide de Produit
  idus = localStorage.getItem("idUs"); // Correction : initialiser idus avec une valeur par défaut
  images: string[] = []; // Correction : initialiser images comme un tableau vide de chaînes
  nbAchat:number = 0;
  OnLoud:boolean=false;
  ngOnInit(): void {
    // Correction : vérifier si l'idus est défini avant de récupérer les produits
    if (!!this.idus) {
      this.ES.listeProduitEncherespaerClientValider(this.idus).subscribe((result) => {
        if (result.length > 0) {
          this.dataa = result;
          this.nbAchat=-1;
          // Correction : appeler getImagebyproduit pour chaque produit
          this.dataa.forEach((achat) => {
            this.getImagebyproduit(achat.produitID.toString());
          });
        }
        this.OnLoud=true;
      });
    }
  }

  getImagebyproduit(idp: string): void { // Correction : spécifier le type de retour void
    this.PHS.getimagebyproduit(idp).subscribe((result) => {
      if (result.length > 0) {
        this.images.push(result[0].toString()); // Correction : utiliser push() pour ajouter la première photo
        console.log('Images après mapping :', this.images);
      }
    });
  }

  view(id:string)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '700px';
    this.PS.getProduitById(id).subscribe((result) => {
      dialogConfig.data= result;
      this.dialog.open(ModalProduitComponent,dialogConfig);
    });
    
    
  }
}
