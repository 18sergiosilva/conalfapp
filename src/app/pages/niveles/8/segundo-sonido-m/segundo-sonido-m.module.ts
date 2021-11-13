import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundoSonidoMPage } from './segundo-sonido-m.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoSonidoMPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundoSonidoMPage]
})
export class SegundoSonidoMPageModule {}
