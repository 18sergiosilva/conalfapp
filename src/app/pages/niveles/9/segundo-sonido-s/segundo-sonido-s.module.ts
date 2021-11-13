import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundoSonidoSPage } from './segundo-sonido-s.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoSonidoSPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundoSonidoSPage]
})
export class SegundoSonidoSPageModule {}
