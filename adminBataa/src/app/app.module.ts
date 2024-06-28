import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutModule } from './core/default-layout/default-layout.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginComponent } from './modules/auth/login/login.component';
import { SharedAppModule } from './core/shared/shared.module';
import { FeatureGuard } from './core/permission/guards/feature.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/shared/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AcheteurModule } from './modules/acheteur-confirme/acheteur-confirme.module';
import { ProfileacheteurModule } from './modules/profileacheteur-confirme/profileacheteur-confirme.module';
import { AcheteurNonconfirmeModule } from './modules/acheteur-nonconfirme/acheteur-nonconfirme.module';
import { ProfileacheteurNonConfirmerModule } from './modules/profileacheteur-nonconfirme/profileacheteur-nonconfirme.module';
import { vendeurModule } from './modules/vendeur/vendeur-confirme.module';
import { ProfilevendeurModule } from './modules/profile-vendeur/profile-vendeur-confirme.module';
import { categorieModule } from './modules/categorie/categorie.module';
import { profilecategorieModule } from './modules/profile-categorie/profile-categorie.module';
import { ProduitModule } from './modules/produit/produit.module';
import { ProduitNonconfirmeModule} from './modules/produit-nonconfirmer/produit-nonconfirme.module';
import { ProfileProduitModule} from './modules/profile-produit/profile-produit.module';
import { ProfileProduitNonConfModule} from './modules/profile-produitnonconfirmer/profile-produitnonconfirmer.module';
import { ConfirmationComponent } from './modules/confirmation/confirmation.component';
import { ArchivemodalComponent } from './modules/archivemodal/archivemodal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfirmationComponent,
    ArchivemodalComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DefaultLayoutModule,
    DashboardModule,
    SharedAppModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatTableModule,
    AcheteurModule,
    ProfileacheteurModule,
    AcheteurNonconfirmeModule,
    ProfileacheteurNonConfirmerModule,
    vendeurModule,
    ProfilevendeurModule,
    categorieModule,
    profilecategorieModule,
    ProduitModule,
    ProduitNonconfirmeModule,
    ProfileProduitModule,
    ProfileProduitNonConfModule
  ],
  providers: [
    FeatureGuard,
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
