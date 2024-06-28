import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcheteurConfirmeComponent } from './acheteur-confirme.component';

const routes: Routes = [{ path: '', component: AcheteurConfirmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcheteurConfirmeRoutingModule {}
