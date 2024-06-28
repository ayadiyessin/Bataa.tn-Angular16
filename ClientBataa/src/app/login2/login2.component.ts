import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AuthService } from 'src/Services/AuthService';
import { UserService } from 'src/Services/user.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component {
  constructor(private AS:AuthService,private router:Router,private US:UserService,private UTS:UtilisateurService) {}
  user!:any

  // signin():void
  // {
  //   this.AS.doGoogleLogin().then(()=>{
  //     localStorage.setItem("connecte","true");
  //     //this.router.navigate(['']);
  //     //location.reload();
  //   });

  //   this.AS.getUserClaims().then((u)=>{
  //     this.user = u;
  //     console.log(this.user);
  //     if(!!this.user)
  //       {
  //         const parts = this.user.displayName.split(' ');
  //         let use = {
  //           email: this.user.email,
  //           password: this.user.email,
  //           type_user: "acheteur"
  //         };
  //         this.US.OnSave(use).subscribe((result) => {
  //           console.log(result);
  //           let utilisat = {
  //             prenom_user: parts[0],
  //             nom_user: parts[1],
  //             image_user: this.user.photoURL,
  //             ville_user:'Tunisie',
  //             adresse_user:'sfax',
  //             telephone_user: this.user.phoneNumber,
  //             userID: result.id
  //           };

  //           this.UTS.OnSave(utilisat).subscribe((res) => {
  //             localStorage.setItem("idUtilisateur",res.id);
  //             //this.router.navigate(['']);
  //           });

  //         });
  //       }
  //   });


  // }

  async signin(): Promise<void> {
    try {
      // Attendre la connexion avec Google
      await this.AS.doGoogleLogin();
      localStorage.setItem("connecte", "true");

      // Récupérer les informations de l'utilisateur une fois connecté
      this.user = await this.AS.getUserClaims();
      console.log(this.user.email);
      localStorage.setItem("email", this.user.email);
      //window.location.reload();

      this.navigateToRootAndReload();

      //location.reload();

    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      // Gérer l'erreur
    }
  }
  // yrssinv
  navigateToRootAndReload() {
    // Naviguer vers "/" en utilisant this.router.navigate()
    this.router.navigate(['/']).then(() => {
      // Après avoir navigué avec succès, attendre un court délai avant de recharger la page
      setTimeout(() => {
        // Recharger la page en utilisant window.location.reload()
        window.location.reload();
      }, 1); // Attendre 500ms (0.5 seconde) avant de recharger la page
    });
  }
  redirectAfterDelay() {
    const delayInSeconds = 3; // Délai en secondes avant la redirection

    setTimeout(() => {
      // Utiliser le routeur pour naviguer vers une autre URL
      this.router.navigateByUrl('/');
    }, delayInSeconds * 1000); // Convertir le délai en millisecondes
  }

}
