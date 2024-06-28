import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileacheteurConfirmeComponent } from './profileacheteur-confirme.component';

const routes: Routes = [{ path: '', component: ProfileacheteurConfirmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class profileacheteurConfirmeRoutingModule {}
