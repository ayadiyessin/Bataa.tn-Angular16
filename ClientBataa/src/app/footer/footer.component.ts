import { Component, OnInit } from '@angular/core';
import { EnchereService } from 'src/Services/enchere.service';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {//implements OnInit
  dateAujourdhui!: Date;
  constructor(private PS: ProduitService,private PHS:PhotoService,private ES:EnchereService) {
    this.dateAujourdhui = new Date();
  }
  // ngOnInit(): void {
  //   this.PS.getProduitValider().subscribe(data => {

  //     if (data) {
  //       // Parcourir les éléments de données
  //       console.log('aaaa')
  //       data.forEach(produit => {
  //         console.log(produit);
  //         this.ES.getEncherParmaxPrixProd(produit.id).subscribe(dataEnch=>{
  //           console.log(dataEnch);
  //           if(dataEnch !==null ){
  //             const updatedDateString: string = dataEnch.produit.date_expiration;
  //             // Convertir la chaîne de date en objet Date
  //             const updatedDate: Date = new Date(updatedDateString);
  //             const formattedUpdatedDate: string = this.formatDate(updatedDate);

  //             // Convertir this.dateAujourdhui en format YYYY-MM-dd
  //             const formattedTodayDate: string = this.formatDate(this.dateAujourdhui);
  //             console.log(formattedUpdatedDate);
  //             console.log(formattedTodayDate);
  //             if(formattedUpdatedDate < formattedTodayDate ){
  //               this.PS.PutupdateEtatVenteProd(dataEnch.produit.id.toString()).subscribe(()=>{
  //                 console.log(dataEnch.id.toString())
  //                 this.ES.PutValiderEnchere(dataEnch.id.toString()).subscribe(()=>{

  //                 })
  //               })



  //             }

  //           }
  //         })

  //       });
  //     }

  //   });

  // }
  // formatDate(date: Date): string {
  //   const year = date.getFullYear();
  //   const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ajouter un zéro en tête si nécessaire
  //   const day = ('0' + date.getDate()).slice(-2); // Ajouter un zéro en tête si nécessaire
  //   return `${year}-${month}-${day}`;
  // }

}
