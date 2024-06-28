import { Component, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import { Produit } from 'src/Modeles/Produit';
import { ProduitService } from 'src/Services/produit.service';
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
  selector: 'app-profile-vendeur',
  templateUrl: './profile-vendeur.component.html',
  styleUrls: ['./profile-vendeur.component.css']
})
export class ProfileVendeurComponent {
  // displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  // dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id','nom', 'prix_unitaire','etat_produit','etat_vente'];
  dataSource = new MatTableDataSource<Produit>();
  idcourant!:string
  dataa!:Utilisateur
  dateAujourdhui!: Date;
  OnLoud:boolean=false;
  OnLoud2:boolean=false;

  verif!:boolean
  constructor(private activatedRoute:ActivatedRoute,private UTS:UtilisateurService , private PS:ProduitService) {
    this.dateAujourdhui = new Date();
  }
  ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
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
      console.log(this.dateAujourdhui)

    }


  }
  GetProduitByUser() {
    this.PS.getProduitByUser(this.idcourant).subscribe(data => {
      console.log(data);
      if (data && data.length > 0) {
        this.verif=true;
        this.dataSource = new MatTableDataSource<Produit>(data);
      } else {
        // Gérer le cas où les données sont vides
        console.log("Aucune donnée trouvée");
        this.verif=false;
      }
      console.log(this.verif)
      this.OnLoud2=true;
    });

  }

}
