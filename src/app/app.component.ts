import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {
    this.appPages = [
      {
        title: 'Inicio',
        url: '/home-results',
        direct: 'root',
        icon: 'home'
      },
      {
        title: 'Progreso',
        url: '/about',
        direct: 'forward',
        icon: 'stats'
      },
      {
        title: 'Usuario',
        url: '/edit-profile',
        direct: 'forward',
        icon: 'contact'
      },

      {
        title: 'Ajustes',
        url: '/settings',
        direct: 'forward',
        icon: 'cog'
      },
      {
        title: 'Salir',
        url: '/',
        direct: 'forward',
        icon: 'exit'
      }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(() => {});
  }
}
