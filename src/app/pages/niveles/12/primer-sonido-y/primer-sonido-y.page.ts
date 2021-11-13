import { Component, OnInit } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';
import {AudioService} from '../../../../services/audio.service'
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-primer-sonido-y',
  templateUrl: './primer-sonido-y.page.html',
  styleUrls: ['./primer-sonido-y.page.scss'],
})
export class PrimerSonidoYPage implements OnInit {

  imagen1 = 'assets/material/12/1/yoyo.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoY', 'assets/material/sonidoLetras/y.mp3');

    this.audio.preload('yoyo', 'assets/material/12/1/yoyo.mp3');

    this.audio.preload('yMinuscula', 'assets/material/12/2/minuscula.mp3');
    this.audio.preload('yMayuscula', 'assets/material/12/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/12/1/yoyo.PNG') {
      this.audio.play('yoyo');
    } else if (this.imagen1==='assets/material/12/2/3.png'){
      this.audio.play('yMinuscula');
    } else if (this.imagen1==='assets/material/12/2/4.png'){
      this.audio.play('yMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoY');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/12/1/yoyo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A yoyo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/12/2/3.png';
      this.anterior=true;
      console.log("Y MINUSCULA");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/12/2/4.png';
      this.anterior=true;
      console.log("Y MAYUSCULA");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('home-results');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/12/1/yoyo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A yoyo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/12/2/3.png';
      this.anterior=true;
      console.log("Y MINUSCULA");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/12/2/4.png';
      this.anterior=true;
      console.log("Y MAYUSCULA");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('home-results');
    }
  }

}
