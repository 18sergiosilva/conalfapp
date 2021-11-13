import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimerSonidoSPage } from './primer-sonido-s.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerSonidoSPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimerSonidoSPage]
})
export class PrimerSonidoSPageModule {}
