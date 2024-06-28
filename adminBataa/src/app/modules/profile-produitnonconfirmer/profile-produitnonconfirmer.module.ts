import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from 'src/app/core/shared/shared.module';
import { profileProduitNonconfirmerRoutingModule } from './profileproduitnonconfirmer-routing.module';
import { ProfileProduitnonconfirmerComponent } from './profile-produitnonconfirmer.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ProfileProduitnonconfirmerComponent
  ],
  imports: [
    CommonModule,
    profileProduitNonconfirmerRoutingModule,
    SharedAppModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule


  ]
})
export class ProfileProduitNonConfModule { }
