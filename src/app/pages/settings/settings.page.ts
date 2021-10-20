import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  letra: any = 'Molde';
  tama:any = 'Minúscula';
  enableNotifications: any;
  enableSound: any;

  tipoLetras:any = ['Molde', 'Cursiva'];
  mayusculaMinuscula:any=['Mayúscula', 'Minúscula'];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  editProfile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  logout() {
    this.navCtrl.navigateRoot('/');
  }

}
