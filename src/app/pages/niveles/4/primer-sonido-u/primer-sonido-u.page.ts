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
  selector: 'app-primer-sonido-u',
  templateUrl: './primer-sonido-u.page.html',
  styleUrls: ['./primer-sonido-u.page.scss'],
})
export class PrimerSonidoUPage implements OnInit {

  imagen1 = 'assets/material/4/1/uña.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoU', 'assets/material/sonidoLetras/u.mp3');

    this.audio.preload('universo', 'assets/material/4/1/universo.mp3');
    this.audio.preload('uno', 'assets/material/4/1/uno.mp3');
    this.audio.preload('urracas', 'assets/material/4/1/urracas.mp3');
    this.audio.preload('uvas', 'assets/material/4/1/uvas.mp3');
    this.audio.preload('uña', 'assets/material/4/1/uña.mp3');

    this.audio.preload('uMinuscula', 'assets/material/4/2/minuscula.mp3');
    this.audio.preload('uMayuscula', 'assets/material/4/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/4/1/uña.PNG') {
      this.audio.play('uña');
    } else if (this.imagen1==='assets/material/4/1/universo.PNG'){
      this.audio.play('universo');
    } else if (this.imagen1==='assets/material/4/1/uno.PNG'){
      this.audio.play('uno');
    } else if (this.imagen1==='assets/material/4/1/urracas.PNG'){
      this.audio.play('urracas');
    } else if (this.imagen1==='assets/material/4/1/uvas.PNG'){
      this.audio.play('uvas');
    } else if (this.imagen1==='assets/material/4/2/3.png'){
      this.audio.play('uMinuscula');
    } else if (this.imagen1==='assets/material/4/2/4.png'){
      this.audio.play('uMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoU');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/uña.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A uña");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/universo.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A universo");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/uno.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A uno");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/urracas.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A urracas");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/uvas.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A uvas");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/4/2/3.png';
      this.anterior=true;
      console.log("U MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/4/2/4.png';
      this.anterior=true;
      console.log("U MAYUSCULA");
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
      this.imagen1='assets/material/4/1/uña.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A uña");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/universo.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A universo");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/uno.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A uno");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/urracas.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A urracas");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/4/1/uvas.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A uvas");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/4/2/3.png';
      this.anterior=true;
      console.log("U MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/4/2/4.png';
      this.anterior=true;
      console.log("U MAYUSCULA");
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
