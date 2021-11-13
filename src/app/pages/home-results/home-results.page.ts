import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  searchKey = '';
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/letrai.png';
  themeCover2 = 'assets/img/letrao.png';
  themeCover3 = 'assets/img/letraa.png';
  themeCover4 = 'assets/img/letrau.png';
  themeCover5 = 'assets/img/letrae.png';
  themeCover6 = 'assets/img/letral.png';
  themeCover7 = 'assets/img/letrap.png';
  themeCover8 = 'assets/img/letram.png';
  themeCover9 = 'assets/img/letras.png';
  themeCover10 = 'assets/img/letrab.png';
  themeCover11 = 'assets/img/letran.png';
  themeCover12 = 'assets/img/letray.png';
  themeCover13 = 'assets/img/letrad.png';
  themeCover14 = 'assets/img/letrac.png';
  themeCover15 = 'assets/img/letrat.png';
  

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  nivel1() {
    this.navCtrl.navigateForward('primer-sonido-i');
  }

  nivel2() {
    this.navCtrl.navigateForward('primer-sonido-o');
  }

  nivel3() {
    this.navCtrl.navigateForward('primer-sonido-a');
  }

  nivel4() {
    this.navCtrl.navigateForward('primer-sonido-u');
  }

  nivel5() {
    this.navCtrl.navigateForward('primer-sonido-e');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
