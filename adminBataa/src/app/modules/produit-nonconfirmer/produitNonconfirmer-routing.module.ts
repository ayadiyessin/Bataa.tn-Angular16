import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitNonconfirmerComponent } from './produit-nonconfirmer.component';

const routes: Routes = [{ path: '', component: ProduitNonconfirmerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class produitNonconfirmeRoutingModule {}
