import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from 'src/app/core/shared/shared.module';
import { profilevendeurRoutingModule } from './profile-vendeur-routing.module';
import { ProfileVendeurComponent } from './profile-vendeur.component';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ProfileVendeurComponent
  ],
  imports: [
    CommonModule,
    profilevendeurRoutingModule,
    SharedAppModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule


  ]
})
export class ProfilevendeurModule { }
