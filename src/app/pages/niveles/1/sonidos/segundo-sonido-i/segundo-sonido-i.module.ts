import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundoSonidoIPage } from './segundo-sonido-i.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoSonidoIPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundoSonidoIPage]
})
export class SegundoSonidoIPageModule {}
