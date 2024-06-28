import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileProduitnonconfirmerComponent } from './profile-produitnonconfirmer.component';

const routes: Routes = [{ path: '', component: ProfileProduitnonconfirmerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class profileProduitNonconfirmerRoutingModule {}
