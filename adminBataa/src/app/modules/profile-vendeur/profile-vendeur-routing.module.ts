import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileVendeurComponent } from './profile-vendeur.component';

const routes: Routes = [{ path: '', component: ProfileVendeurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class profilevendeurRoutingModule {}
