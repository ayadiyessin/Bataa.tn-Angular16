import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MotoComponent } from './moto/moto.component';
import { VoitureComponent } from './voiture/voiture.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { AutreInformatiqueComponent } from './autre-informatique/autre-informatique.component';
import { TerrainComponent } from './terrain/terrain.component';
import { BureauComponent } from './bureau/bureau.component';
import { MaisonComponent } from './maison/maison.component';
import { ProfileProduitComponent } from './profile-produit/profile-produit.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { ListeachatComponent } from './listeachat/listeachat.component';
import { EnchereComponent } from './enchere/enchere.component';
import { TousImmobilierComponent } from './tous-immobilier/tous-immobilier.component';
import { TousMaterielInformatiqueComponent } from './tous-materiel-informatique/tous-materiel-informatique.component';
import { TousTransportComponent } from './tous-transport/tous-transport.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';

const routes: Routes = [
    {
      path:'',
      pathMatch:'full',
      component:HomeComponent
    },
    {
      path:'moto',
      pathMatch: 'full',
      component:MotoComponent
    },
    {
      path:'voiture',
      pathMatch: 'full',
      component:VoitureComponent
    },
    {
      path:'ordinateur',
      pathMatch: 'full',
      component:OrdinateurComponent
    },
    {
      path:'telephone',
      pathMatch: 'full',
      component:TelephoneComponent
    },
    {
      path:'autreInformatique',
      pathMatch: 'full',
      component:AutreInformatiqueComponent
    },
    {
      path:'terrain',
      pathMatch: 'full',
      component:TerrainComponent
    },
    {
      path:'bureau',
      pathMatch: 'full',
      component:BureauComponent
    },
    {
      path:'maison',
      pathMatch: 'full',
      component:MaisonComponent
    },
    {
      path:'profileProduit/:id',
      pathMatch: 'full',
      component:ProfileProduitComponent
    },
    {
      path:'login',
      pathMatch: 'full',
      component:LoginComponent
    },
    {
      path:'login2',
      pathMatch: 'full',
      component:Login2Component
    },
    {
      path:'listproduit',
      pathMatch: 'full',
      component:ListeproduitComponent
    },
    {
      path:'listachat',
      pathMatch: 'full',
      component:ListeachatComponent
    },
    {
      path:'listench',
      pathMatch: 'full',
      component:EnchereComponent
    },
    {
      path:'tousI',
      pathMatch: 'full',
      component:TousImmobilierComponent
    },
    {
      path:'tousMI',
      pathMatch: 'full',
      component:TousMaterielInformatiqueComponent
    },
    {
      path:'tousMt',
      pathMatch: 'full',
      component:TousTransportComponent
    },
    {
      path:'createProduit',
      pathMatch: 'full',
      component:AjoutProduitComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
