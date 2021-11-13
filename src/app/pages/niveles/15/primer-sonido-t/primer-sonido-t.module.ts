import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimerSonidoTPage } from './primer-sonido-t.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerSonidoTPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimerSonidoTPage]
})
export class PrimerSonidoTPageModule {}
