import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/Modeles/Photo';
import { Produit } from 'src/Modeles/Produit';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { EnchereService } from 'src/Services/enchere.service';
import { PhotoService } from 'src/Services/photo.service';
import { ProduitService } from 'src/Services/produit.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-produit',
  templateUrl: './profile-produit.component.html',
  styleUrls: ['./profile-produit.component.css']
})
export class ProfileProduitComponent {
  dataa!: Produit
  idcourant!: string
  images!: String[]
  vendeur!: Utilisateur
  prix!: number
  AffichePrix!: number
  AffichePrixMax!: number
  idUserLocal !: string 
  OnLoud:boolean=false;
  OnLoud1:boolean=false;
  OnLoud2:boolean=false;
  constructor(private PS: ProduitService, private PHS: PhotoService, private router: Router, private activatedRoute: ActivatedRoute, private ES: EnchereService, private UtS: UtilisateurService) { }
  ngOnInit(): void { // hethi kima onLoad kif t7el page yetebwanti 3ala hethi méthode ama tzid implements OnInit
    //recuperer l'id de url
    this.idcourant = this.activatedRoute.snapshot.params['id'];
    this.idUserLocal = localStorage.getItem('idUs') || '';
    console.log(this.idUserLocal);
    // console.log(this.idcourant)
    if (!!this.idcourant) // !! hethoum ye9esdo bihom "troli" ma3neha ken idcourant mawjoud men asslo wala ma3neha différent undifined
    {
      this.PS.getProduitById(this.idcourant).subscribe((result) => {
        this.dataa = result;
        console.log(this.dataa)
        console.log(this.dataa.utilisateurID);
        this.prix = Math.round(this.dataa.prix_unitaire * 1.1);
        //this.prix = this.dataa.prix_unitaire +(this.dataa.prix_unitaire*0.1);
        console.log(this.prix);
        this.affichevendeur(this.dataa.utilisateurID);
      })
      this.getImagebyproduit();
      this.getPrixEnch();

    }

  }
  getPrixEnch() {
    this.ES.getMaxPrixEnchere(this.idcourant).subscribe((result) => {
      this.AffichePrix = result;
      if (this.AffichePrix != 0) {
        console.log(this.AffichePrix);
        this.prix = Math.round(this.AffichePrix * 1.1);
        console.log(this.prix);
      }
      //this.AffichePrixMax=result;
      this.OnLoud2=true;
    })
  }

  affichevendeur(x: any) {
    console.log(x);
    this.UtS.getUtilisateurById(x).subscribe((v) => {
      this.vendeur = v;
      console.log(this.vendeur)
    })
    this.OnLoud=true;
  }
  // images = ['assets/dist/img/4.png','assets/dist/img/4.png' ,'assets/dist/img/4.png'
  // ];
  getImagebyproduit() {
    this.PHS.getimagebyproduit(this.idcourant).subscribe((result) => {
      console.log('Données reçues du service :', result);
      this.images = result;
      console.log('Images après mapping :', this.images);
    })
    this.OnLoud1=true;
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

  enchere() {

    if (this.idUserLocal == '') {
      Swal.fire({
        title: '',
        text: "Vous devez être connecté pour enchérir sur ce produit.",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Annuler',
        confirmButtonText: 'OK'    
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login2']);
        }
      });
      
    }
    else {
      let ech = {
        prix_vente: this.prix.toString(),
        produitID: this.idcourant,
        utilisateurID: this.idUserLocal
      }
      console.log(ech);
      let updateEnch = {
        prix_vente: this.prix.toString(),
        produitID: this.idcourant,
        utilisateurID: this.idUserLocal
      }
      this.ES.getProduitUserEnchere(this.idcourant, this.idUserLocal).subscribe((res) => {
        //console.log(res);
        if (res.length === 0) {
          this.ES.postProduitEnchere(this.idcourant, this.idUserLocal, ech).subscribe(() => {
            Swal.fire({
              title: '',
              text: 'Votre enchère a été effectuée avec succès',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload(); // ou tout autre action que vous souhaitez effectuer après confirmation
              }
            });

          })
        } else {
          console.log(this.AffichePrix); /////////////////erreur
          this.AffichePrixMax = parseFloat(res[0].prix_vente);
          console.log(this.AffichePrixMax);
          if (this.AffichePrix === this.AffichePrixMax) {
            Swal.fire({
              title: '',
              text: 'Vous êtes le plus offrant sur ce produit !',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload(); // ou toute autre action que vous souhaitez effectuer après confirmation
              }
            });
          }
          else {

            this.ES.putProduitUserEnchere(res[0].id, updateEnch).subscribe(() => {
              Swal.fire({
                title: '',
                text: 'Votre enchère a été effectuée avec succès',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload(); // ou tout autre action que vous souhaitez effectuer après confirmation
                }
              });


            })
          }


        }
      })
    }

  }
}
