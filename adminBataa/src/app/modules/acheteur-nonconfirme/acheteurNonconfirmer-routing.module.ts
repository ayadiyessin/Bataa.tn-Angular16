import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcheteurNonconfirmeComponent } from './acheteur-nonconfirme.component';

const routes: Routes = [{ path: '', component: AcheteurNonconfirmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteurNonconfirmeRoutingModule {}
