import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArancelesPage } from './aranceles.page';

const routes: Routes = [
  {
    path: '',
    component: ArancelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArancelesPageRoutingModule {}
