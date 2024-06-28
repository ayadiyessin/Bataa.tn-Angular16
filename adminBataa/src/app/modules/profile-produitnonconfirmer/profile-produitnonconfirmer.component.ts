import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/Modeles/Photo';
import { Produit } from 'src/Modeles/Produit';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile-produitnonconfirmer',
  templateUrl: './profile-produitnonconfirmer.component.html',
  styleUrls: ['./profile-produitnonconfirmer.component.css']
})
export class ProfileProduitnonconfirmerComponent {
  // displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  // dataSource = ELEMENT_DATA;
  idcourant!:string
  dataa!:Produit
  vendeur!:Utilisateur
  images: Photo[] = [];
  dateAujourdhui!: Date;
  OnLoud:boolean=false;
  OnLoud2:boolean=false;
  OnLoud3:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private PS:ProduitService,private UtS:UtilisateurService ,private PHS:PhotoService,private router: Router) {
    {this.dateAujourdhui = new Date();}
  }
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

      this.affichevendeur(this.dataa.utilisateurID);
      this.OnLoud=true;
      })
      this.getImagebyproduit();


    }

  }
  // images = ['assets/dist/img/4.png','assets/dist/img/4.png' ,'assets/dist/img/4.png'
  // ];
  getImagebyproduit(){
    this.PHS.getimagebyproduit(this.idcourant).subscribe((result)=>{
      this.images = result;
      console.log(result)
      this.OnLoud2=true;
    })
  }
  confirmer(){
    this.PS.confirmerProduit(this.idcourant).subscribe((result)=>{
      Swal.fire({
        title: '',
        text: 'Produit confirmer avec success',
        icon: 'success',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirection vers un autre composant en utilisant le Router
          this.router.navigate(['/produit']);
        }
      });
    })
  }
  affichevendeur(x:any){
    console.log(x);
    this.UtS.getUtilisateurById(x).subscribe((v)=>{
      this.vendeur=v;
      console.log(this.vendeur)
      this.OnLoud3=true;
    })
  }




}
