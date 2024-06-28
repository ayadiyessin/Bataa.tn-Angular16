import { Component,OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Enchere } from 'src/Modeles/Enchere';
import { Photo } from 'src/Modeles/Photo';
import { Produit } from 'src/Modeles/Produit';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { EnchereService } from 'src/Services/enchere.service';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
@Component({
  selector: 'app-profile-produit',
  templateUrl: './profile-produit.component.html',
  styleUrls: ['./profile-produit.component.css']
})
export class ProfileProduitComponent implements OnInit {
  displayedColumns: string[] = ['id','nom', 'prenom', 'ville', 'adresse'];
  dataSource = new MatTableDataSource<Enchere>();
  idcourant!:string
  dataa!:Produit
  vendeur!:Utilisateur
  images: Photo[] = [];
  maxminPrix!:number
  dateAujourdhui!: Date;
  verif!:boolean
  OnLoud:boolean=false;
  OnLoud2:boolean=false;
  OnLoud3:boolean=false;
  OnLoud4:boolean=false;
  OnLoud5:boolean=false;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  constructor(private _liveAnnouncer: LiveAnnouncer,private activatedRoute:ActivatedRoute,private PS:ProduitService,private UtS:UtilisateurService,private ES:EnchereService ,private PHS:PhotoService)
  {this.dateAujourdhui = new Date();}
  ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
    //recuperer l'id de url
    this.idcourant=this.activatedRoute.snapshot.params['id'] ;
    // console.log(this.idcourant)
    if(!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
    {
      this.PS.getProduitById(this.idcourant).subscribe((result)=>{
        this.dataa=result;
        console.log(this.dataa)
        console.log(this.dataa.utilisateurID);
      this.getMaxprixProduit(this.idcourant);
      this.affichevendeur(this.dataa.utilisateurID);
      this.getlisteEncherespaerproduit(this.idcourant)
      this.OnLoud=true;
      })
      this.getImagebyproduit();
    }

  }
  getMaxprixProduit(x:any) {
    this.ES.getMaxPrixEnchere(x).subscribe(data => {
      console.log(data);
      this.maxminPrix= data;
      this.OnLoud2=true;
    });
  }
  getlisteEncherespaerproduit(x:any) {
    this.ES.getlisteProduitEncherespaerproduit(x).subscribe(data  => {
      if (data && data.length > 0) {
        this.verif=true;
        this.dataSource = new MatTableDataSource<Enchere>(data);

      } else {
        // Gérer le cas où les données sont vides
        console.log("Aucune donnée trouvée");
        this.verif=false;
      }
      this.OnLoud3=true;


    });
  }
  getImagebyproduit(){
    this.PHS.getimagebyproduit(this.idcourant).subscribe((result)=>{
      this.images = result;
      console.log(result)
      this.OnLoud4=true;
    })
  }
  affichevendeur(x:any){
    console.log(x);
    this.UtS.getUtilisateurById(x).subscribe((v)=>{
      this.vendeur=v;
      console.log(this.vendeur)
      this.OnLoud5=true;
    })
  }

}
