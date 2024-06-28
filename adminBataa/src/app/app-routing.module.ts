import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './modules/auth/guards/auth.guard';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
//import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { AcheteurConfirmeComponent } from './modules/acheteur-confirme/acheteur-confirme.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },


  {
    path: '',
    component: DefaultLayoutComponent,
    // canActivate: [authGuard],
    canActivate: [authGuard] ,
    data: {
      title: 'Login'
    },
    children: [
      {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m =>m.DashboardModule ), canActivate: [authGuard] },

      {path: 'acheteurConfirmer', loadChildren: () => import('./modules/acheteur-confirme/acheteur-confirme.module').then(m =>m.AcheteurModule ), canActivate: [authGuard]  },
      {path: 'profileacheteurConfirmer/:id', loadChildren: () => import('./modules/profileacheteur-confirme/profileacheteur-confirme.module').then(m =>m.ProfileacheteurModule ) , canActivate: [authGuard]  },
      {path: 'acheteurNonconfirmer', loadChildren: () => import('./modules/acheteur-nonconfirme/acheteur-nonconfirme.module').then(m =>m.AcheteurNonconfirmeModule ), canActivate: [authGuard]  },
      {path: 'profileacheteurNonConfirmer/:id', loadChildren: () => import('./modules/profileacheteur-nonconfirme/profileacheteur-nonconfirme.module').then(m =>m.ProfileacheteurNonConfirmerModule ) , canActivate: [authGuard]  },
      {path: 'vendeur', loadChildren: () => import('./modules/vendeur/vendeur-confirme.module').then(m =>m.vendeurModule ) , canActivate: [authGuard]  },
      {path: 'Profilevendeur/:id', loadChildren: () => import('./modules/profile-vendeur/profile-vendeur-confirme.module').then(m =>m.ProfilevendeurModule ) , canActivate: [authGuard]  },
      {path: 'categorie', loadChildren: () => import('./modules/categorie/categorie.module').then(m =>m.categorieModule ) , canActivate: [authGuard]  },
      {path: 'profilecategorie/:id', loadChildren: () => import('./modules/profile-categorie/profile-categorie.module').then(m =>m.profilecategorieModule ) , canActivate: [authGuard] },
      {path: 'produit', loadChildren: () => import('./modules/produit/produit.module').then(m =>m.ProduitModule ) , canActivate: [authGuard]  },
      {path: 'produitNonconfirmer', loadChildren: () => import('./modules/produit-nonconfirmer/produit-nonconfirme.module').then(m =>m.ProduitNonconfirmeModule ) , canActivate: [authGuard]  },
      {path: 'ProfileProduit/:id', loadChildren: () => import('./modules/profile-produit/profile-produit.module').then(m =>m.ProfileProduitModule ), canActivate: [authGuard]  },
      {path: 'ProfileProduitNonConf/:id', loadChildren: () => import('./modules/profile-produitnonconfirmer/profile-produitnonconfirmer.module').then(m =>m.ProfileProduitNonConfModule ), canActivate: [authGuard]  },

    ]
  },
  {
    path: 'login',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa maktoub members
    component:LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  // {
  //   path: 'dashboard',
  //   // canActivate: [authGuard],
  //   component: DashboardComponent,
  //   data: {
  //     title: 'Acceuil'
  //   }
  //  },


  { // rederection ll login  kif fi vid /
    path: '',
    pathMatch:'full', // ma tafichihouli ken kif ma yebdaa path fera8
    redirectTo:"login" // bech ki yodkol yhezni ll login
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
