import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MotoComponent } from './moto/moto.component';
import { VoitureComponent } from './voiture/voiture.component';
import { OrdinateurComponent } from './ordinateur/ordinateur.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { AutreInformatiqueComponent } from './autre-informatique/autre-informatique.component';
import { TerrainComponent } from './terrain/terrain.component';
import { BureauComponent } from './bureau/bureau.component';
import { MaisonComponent } from './maison/maison.component';
import { ProfileProduitComponent } from './profile-produit/profile-produit.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ListeproduitComponent } from './listeproduit/listeproduit.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeachatComponent } from './listeachat/listeachat.component';
import { EnchereComponent } from './enchere/enchere.component';
import { ModalProduitComponent } from './modal-produit/modal-produit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FirebaseModule } from './Firebase.module';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { TousImmobilierComponent } from './tous-immobilier/tous-immobilier.component';
import { TousMaterielInformatiqueComponent } from './tous-materiel-informatique/tous-materiel-informatique.component';
import { TousTransportComponent } from './tous-transport/tous-transport.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
//import { CloudinaryModule } from './Cloudinary.module';
import {CloudinaryModule} from '@cloudinary/ng';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MotoComponent,
    VoitureComponent,
    OrdinateurComponent,
    TelephoneComponent,
    AutreInformatiqueComponent,
    TerrainComponent,
    BureauComponent,
    MaisonComponent,
    ProfileProduitComponent,
    LoginComponent,
    Login2Component,
    ListeproduitComponent,
    ListeachatComponent,
    EnchereComponent,
    ModalProduitComponent,
    TousImmobilierComponent,
    TousMaterielInformatiqueComponent,
    TousTransportComponent,
    AjoutProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    FirebaseModule,
    MatMenuModule,
    MatIconModule,
    CloudinaryModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
