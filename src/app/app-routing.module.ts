import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'primer-sonido-i', loadChildren: './pages/niveles/1/sonidos/primer-sonido-i/primer-sonido-i.module#PrimerSonidoIPageModule' },
  { path: 'segundo-sonido-i', loadChildren: './pages/niveles/1/sonidos/segundo-sonido-i/segundo-sonido-i.module#SegundoSonidoIPageModule' },  { path: 'primer-sonido-o', loadChildren: './pages/niveles/2/primer-sonido-o/primer-sonido-o.module#PrimerSonidoOPageModule' },
  { path: 'primer-sonido-a', loadChildren: './pages/niveles/3/primer-sonido-a/primer-sonido-a.module#PrimerSonidoAPageModule' },
  { path: 'primer-sonido-u', loadChildren: './pages/niveles/4/primer-sonido-u/primer-sonido-u.module#PrimerSonidoUPageModule' },
  { path: 'primer-sonido-e', loadChildren: './pages/niveles/5/primer-sonido-e/primer-sonido-e.module#PrimerSonidoEPageModule' },
  { path: 'primer-sonido-l', loadChildren: './pages/niveles/6/primer-sonido-l/primer-sonido-l.module#PrimerSonidoLPageModule' },
  { path: 'primer-sonido-p', loadChildren: './pages/niveles/7/primer-sonido-p/primer-sonido-p.module#PrimerSonidoPPageModule' },
  { path: 'primer-sonido-m', loadChildren: './pages/niveles/8/primer-sonido-m/primer-sonido-m.module#PrimerSonidoMPageModule' },
  { path: 'primer-sonido-s', loadChildren: './pages/niveles/9/primer-sonido-s/primer-sonido-s.module#PrimerSonidoSPageModule' },
  { path: 'primer-sonido-b', loadChildren: './pages/niveles/10/primer-sonido-b/primer-sonido-b.module#PrimerSonidoBPageModule' },
  { path: 'primer-sonido-n', loadChildren: './pages/niveles/11/primer-sonido-n/primer-sonido-n.module#PrimerSonidoNPageModule' },
  { path: 'primer-sonido-y', loadChildren: './pages/niveles/12/primer-sonido-y/primer-sonido-y.module#PrimerSonidoYPageModule' },
  { path: 'primer-sonido-d', loadChildren: './pages/niveles/13/primer-sonido-d/primer-sonido-d.module#PrimerSonidoDPageModule' },
  { path: 'primer-sonido-c', loadChildren: './pages/niveles/14/primer-sonido-c/primer-sonido-c.module#PrimerSonidoCPageModule' },
  { path: 'primer-sonido-t', loadChildren: './pages/niveles/15/primer-sonido-t/primer-sonido-t.module#PrimerSonidoTPageModule' },
  { path: 'segunda-pagina-l', loadChildren: './pages/niveles/6/segunda-pagina-l/segunda-pagina-l.module#SegundaPaginaLPageModule' },
  { path: 'segundo-sonido-p', loadChildren: './pages/niveles/7/segundo-sonido-p/segundo-sonido-p.module#SegundoSonidoPPageModule' },
  { path: 'segundo-sonido-m', loadChildren: './pages/niveles/8/segundo-sonido-m/segundo-sonido-m.module#SegundoSonidoMPageModule' },
  { path: 'segundo-sonido-s', loadChildren: './pages/niveles/9/segundo-sonido-s/segundo-sonido-s.module#SegundoSonidoSPageModule' },
  { path: 'segundo-sonido-b', loadChildren: './pages/niveles/10/segundo-sonido-b/segundo-sonido-b.module#SegundoSonidoBPageModule' },
  { path: 'segundo-sonido-n', loadChildren: './pages/niveles/11/segundo-sonido-n/segundo-sonido-n.module#SegundoSonidoNPageModule' },
  { path: 'segundo-sonido-y', loadChildren: './pages/niveles/12/segundo-sonido-y/segundo-sonido-y.module#SegundoSonidoYPageModule' },
  { path: 'segundo-sonido-d', loadChildren: './pages/niveles/13/segundo-sonido-d/segundo-sonido-d.module#SegundoSonidoDPageModule' },
  { path: 'segundo-sonido-c', loadChildren: './pages/niveles/14/segundo-sonido-c/segundo-sonido-c.module#SegundoSonidoCPageModule' },
  { path: 'segundo-sonido-t', loadChildren: './pages/niveles/15/segundo-sonido-t/segundo-sonido-t.module#SegundoSonidoTPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
