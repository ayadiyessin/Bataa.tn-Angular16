import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileacheteurNonconfirmeComponent } from './profileacheteur-nonconfirme.component';

const routes: Routes = [{ path: '', component: ProfileacheteurNonconfirmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class profileacheteurNonConfirmeRoutingModule {}
