import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimerSonidoPPage } from './primer-sonido-p.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerSonidoPPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimerSonidoPPage]
})
export class PrimerSonidoPPageModule {}
