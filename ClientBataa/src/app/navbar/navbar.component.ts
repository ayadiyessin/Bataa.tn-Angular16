import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Modeles/User';
import { Utilisateur } from 'src/Modeles/Utilisateur';
import { AuthService } from 'src/Services/AuthService';
import { UserService } from 'src/Services/user.service';
import { UtilisateurService } from 'src/Services/utilisateur.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  bool!: string | null;
  email!: string | null;
  user: any;
  use!: User;
  utilisatttt!: Utilisateur;
  nutel!:number
  constructor(private AS: AuthService, private router: Router, private US: UserService, private UTS: UtilisateurService) {}

  ngOnInit(): void {
    this.bool = localStorage.getItem("connecte");
    this.email = localStorage.getItem("email");
    this.AS.getUserClaims().then((u) => {
      this.user = u;
      const parts = this.user.displayName.split(' ');
      let postUser = {
        email: this.user.email,
        password: this.user.email,
        type_user: "acheteur"
      };

      let utilisat = {
        prenom_user: parts[0],
        nom_user: parts[1],
        image_user: this.user.photoURL,
        ville_user: 'Tunisie',
        adresse_user: 'sfax',
        telephone_user: 21820477,
      }
      if (this.email != null) {
        console.log(this.email)
        this.US.getUserByEmail(this.email).subscribe((result) => {
          if(Object.keys(result).length === 0)
            {

              this.US.OnSave(postUser).subscribe((resultUser) => {
                let utilisat2 = {
                  ... utilisat,
                  userID: resultUser.id
                };

                console.log(utilisat2)
                this.UTS.OnSave(utilisat2).subscribe((res) => {
                  localStorage.setItem("idUs", res.id);

                });
              });
            }
            else
            {

              this.use = result;
              this.UTS.getUtilisateurByUser(this.use.id).subscribe((v) => {
                this.utilisatttt = v;
                localStorage.setItem("idUs", this.utilisatttt.id);
              });


            }

        });
      }
    });


  }

  signout(): void {
    this.AS.doLogout().then(() => {
      localStorage.setItem("connecte", "false");
      localStorage.removeItem("email");
      localStorage.removeItem("idUs");
      this.navigateToRootAndReload();
      // this.router.navigate(['']);
      // location.reload();
    });
  }
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


}
