import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArancelesPageRoutingModule } from './aranceles-routing.module';

import { ArancelesPage } from './aranceles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArancelesPageRoutingModule
  ],
  declarations: [ArancelesPage]
})
export class ArancelesPageModule {}
