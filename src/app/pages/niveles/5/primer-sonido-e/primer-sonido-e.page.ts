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
  selector: 'app-primer-sonido-e',
  templateUrl: './primer-sonido-e.page.html',
  styleUrls: ['./primer-sonido-e.page.scss'],
})
export class PrimerSonidoEPage implements OnInit {

  imagen1 = 'assets/material/5/1/embudo.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoE', 'assets/material/sonidoLetras/e.mp3');

    this.audio.preload('erupcion', 'assets/material/5/1/erupcion.mp3');
    this.audio.preload('escalera', 'assets/material/5/1/escalera.mp3');
    this.audio.preload('escoba', 'assets/material/5/1/escoba.mp3');
    this.audio.preload('espigas', 'assets/material/5/1/espigas.mp3');
    this.audio.preload('embudo', 'assets/material/5/1/embudo.mp3');

    this.audio.preload('eMinuscula', 'assets/material/5/2/minuscula.mp3');
    this.audio.preload('eMayuscula', 'assets/material/5/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/5/1/embudo.PNG') {
      this.audio.play('embudo');
    } else if (this.imagen1==='assets/material/5/1/erupcion.PNG'){
      this.audio.play('erupcion');
    } else if (this.imagen1==='assets/material/5/1/escalera.PNG'){
      this.audio.play('escalera');
    } else if (this.imagen1==='assets/material/5/1/escoba.PNG'){
      this.audio.play('escoba');
    } else if (this.imagen1==='assets/material/5/1/espigas.PNG'){
      this.audio.play('espigas');
    } else if (this.imagen1==='assets/material/5/2/3.png'){
      this.audio.play('eMinuscula');
    } else if (this.imagen1==='assets/material/5/2/4.png'){
      this.audio.play('eMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoE');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/embudo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A embudo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/erupcion.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A erupcion");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/escalera.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A escalera");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/escoba.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A escoba");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/espigas.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A espigas");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/5/2/3.png';
      this.anterior=true;
      console.log("E MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/5/2/4.png';
      this.anterior=true;
      console.log("E MAYUSCULA");
    } else if (this.contadorImagenes == 8){
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
      this.imagen1='assets/material/5/1/embudo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A embudo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/erupcion.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A erupcion");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/escalera.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A escalera");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/escoba.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A escoba");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/5/1/espigas.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A espigas");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/5/2/3.png';
      this.anterior=true;
      console.log("E MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/5/2/4.png';
      this.anterior=true;
      console.log("E MAYUSCULA");
    } else if (this.contadorImagenes == 8){
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
