import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoBusquedaPageRoutingModule } from './resultado-busqueda-routing.module';

import { ResultadoBusquedaPage } from './resultado-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoBusquedaPageRoutingModule
  ],
  declarations: [ResultadoBusquedaPage]
})
export class ResultadoBusquedaPageModule {}
