import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCategorieComponent } from './profile-categorie.component';

const routes: Routes = [{ path: '', component: ProfileCategorieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class profilecategorieRoutingModule {}
