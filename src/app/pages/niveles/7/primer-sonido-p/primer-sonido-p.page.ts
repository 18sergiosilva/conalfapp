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
  selector: 'app-primer-sonido-p',
  templateUrl: './primer-sonido-p.page.html',
  styleUrls: ['./primer-sonido-p.page.scss'],
})
export class PrimerSonidoPPage implements OnInit {

  imagen1 = 'assets/material/7/1/pedro.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoP', 'assets/material/sonidoLetras/p.mp3');

    this.audio.preload('pelota', 'assets/material/7/1/pelota.mp3');
    this.audio.preload('pollo', 'assets/material/7/1/pollo.mp3');
    this.audio.preload('pedro', 'assets/material/7/1/pedro.mp3');

    this.audio.preload('pMinuscula', 'assets/material/7/2/minuscula.mp3');
    this.audio.preload('pMayuscula', 'assets/material/7/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/7/1/pedro.PNG') {
      this.audio.play('pedro');
    } else if (this.imagen1==='assets/material/7/1/pelota.PNG'){
      this.audio.play('pelota');
    } else if (this.imagen1==='assets/material/7/1/pollo.PNG'){
      this.audio.play('pollo');
    } else if (this.imagen1==='assets/material/7/2/3.png'){
      this.audio.play('pMinuscula');
    } else if (this.imagen1==='assets/material/7/2/4.png'){
      this.audio.play('pMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoP');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/7/1/pedro.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A pedro");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/7/1/pelota.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A pelota");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/7/1/pollo.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A pollo");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/7/2/3.png';
      this.anterior=true;
      console.log("P MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/7/2/4.png';
      this.anterior=true;
      console.log("P MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-p');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/7/1/pedro.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A pedro");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/7/1/pelota.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A pelota");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/7/1/pollo.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A pollo");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/7/2/3.png';
      this.anterior=true;
      console.log("P MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/7/2/4.png';
      this.anterior=true;
      console.log("P MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-p');
    }
  }

}
