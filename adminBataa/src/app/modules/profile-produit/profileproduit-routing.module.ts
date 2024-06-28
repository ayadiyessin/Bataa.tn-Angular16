import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileProduitComponent } from './profile-produit.component';

const routes: Routes = [{ path: '', component: ProfileProduitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class profileProduitRoutingModule {}
