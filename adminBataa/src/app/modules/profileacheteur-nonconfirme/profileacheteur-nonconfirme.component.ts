import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { UserService } from 'src/Services/user.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profileacheteur-nonconfirme',
  templateUrl: './profileacheteur-nonconfirme.component.html',
  styleUrls: ['./profileacheteur-nonconfirme.component.css']
})
export class ProfileacheteurNonconfirmeComponent implements OnInit {
  idcourant!:string
  dataa!:Utilisateur
  OnLoud:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,private UTS:UtilisateurService,private US:UserService,private router: Router) {}
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
  }

}
confirmer(x: any){
  this.US.confirmerUtilisateur(x).subscribe((result)=>{
    Swal.fire({
      title: '',
      text: 'Acheteur confirmer avec success',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        // Redirection vers un autre composant en utilisant le Router
        this.router.navigate(['/acheteurConfirmer']);
      }
    });
  })
}

}
