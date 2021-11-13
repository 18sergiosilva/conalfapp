import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimerSonidoCPage } from './primer-sonido-c.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerSonidoCPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimerSonidoCPage]
})
export class PrimerSonidoCPageModule {}
