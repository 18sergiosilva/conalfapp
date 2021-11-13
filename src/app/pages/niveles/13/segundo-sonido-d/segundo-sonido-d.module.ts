import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundoSonidoDPage } from './segundo-sonido-d.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoSonidoDPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundoSonidoDPage]
})
export class SegundoSonidoDPageModule {}
