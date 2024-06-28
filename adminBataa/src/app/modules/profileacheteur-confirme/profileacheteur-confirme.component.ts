import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Enchere } from 'src/Modeles/Enchere';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { EnchereService } from 'src/Services/enchere.service';
import { ProduitService } from 'src/Services/produit.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';

// export interface PeriodicElement {
//   id: number;
//   name: string;
//   work: string;
//   project: string;
//   priority: string;
//   badge: string;
//   budget: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
//   { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
//   { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
//   { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
// ];

@Component({
  selector: 'app-profileacheteur-confirme',
  templateUrl: './profileacheteur-confirme.component.html',
  styleUrls: ['./profileacheteur-confirme.component.css']
})
export class ProfileacheteurConfirmeComponent implements OnInit {
  dateAujourdhui!: Date;
  constructor(private activatedRoute:ActivatedRoute,private UTS:UtilisateurService,private ES:EnchereService) {
    this.dateAujourdhui = new Date();
  }
  displayedColumns: string[] = ['id','nom', 'prix_unitaire','prix_enchere','etat_achat'];
  dataSource = new MatTableDataSource<Enchere>();
  idcourant!:string
  dataa!:Utilisateur
  verif!:boolean
  OnLoud:boolean=false;
  OnLoud2:boolean=false;

ngOnInit(): void {
  // this.GetProduitByUser();

   // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
  //recuperer l'id de url
  this.idcourant=this.activatedRoute.snapshot.params['id'] ;
  // console.log(this.idcourant)
  if(!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
  {
    this.UTS.getUtilisateurById(this.idcourant).subscribe((result)=>{
      this.dataa=result;
      console.log(this.dataa)
      this.OnLoud=true;
    })
    this.GetProduitByUser();
  }

}
GetProduitByUser() {
  this.ES.getlisteProduitEncherespaerClientAcheter(this.idcourant).subscribe(data => {
    console.log(data);
    if (data && data.length > 0) {
      this.verif=true;
      this.dataSource = new MatTableDataSource<Enchere>(data);
    } else {
      // Gérer le cas où les données sont vides
      console.log("Aucune donnée trouvée");
      this.verif=false;
    }
    this.OnLoud2=true;
  });

}

}






