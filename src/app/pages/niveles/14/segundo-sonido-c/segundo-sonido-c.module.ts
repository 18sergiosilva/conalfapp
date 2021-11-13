import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundoSonidoCPage } from './segundo-sonido-c.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoSonidoCPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundoSonidoCPage]
})
export class SegundoSonidoCPageModule {}
