import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimerSonidoDPage } from './primer-sonido-d.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerSonidoDPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimerSonidoDPage]
})
export class PrimerSonidoDPageModule {}
