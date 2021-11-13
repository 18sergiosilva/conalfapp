import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegundaPaginaLPage } from './segunda-pagina-l.page';

const routes: Routes = [
  {
    path: '',
    component: SegundaPaginaLPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegundaPaginaLPage]
})
export class SegundaPaginaLPageModule {}
