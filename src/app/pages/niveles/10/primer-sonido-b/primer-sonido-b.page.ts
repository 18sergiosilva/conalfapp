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
  selector: 'app-primer-sonido-b',
  templateUrl: './primer-sonido-b.page.html',
  styleUrls: ['./primer-sonido-b.page.scss'],
})
export class PrimerSonidoBPage implements OnInit {

  imagen1 = 'assets/material/10/1/banano.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoB', 'assets/material/sonidoLetras/b.mp3');

    this.audio.preload('barrilete', 'assets/material/10/1/barrilete.mp3');
    this.audio.preload('bicicleta', 'assets/material/10/1/bicicleta.mp3');
    this.audio.preload('banano', 'assets/material/10/1/banano.mp3');

    this.audio.preload('bMinuscula', 'assets/material/10/2/minuscula.mp3');
    this.audio.preload('bMayuscula', 'assets/material/10/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/10/1/banano.PNG') {
      this.audio.play('banano');
    } else if (this.imagen1==='assets/material/10/1/barrilete.PNG'){
      this.audio.play('barrilete');
    } else if (this.imagen1==='assets/material/10/1/bicicleta.PNG'){
      this.audio.play('bicicleta');
    } else if (this.imagen1==='assets/material/10/2/3.png'){
      this.audio.play('bMinuscula');
    } else if (this.imagen1==='assets/material/10/2/4.png'){
      this.audio.play('bMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoB');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/10/1/banano.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A banano");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/10/1/barrilete.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A barrilete");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/10/1/bicicleta.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A bicicleta");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/10/2/3.png';
      this.anterior=true;
      console.log("B MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/10/2/4.png';
      this.anterior=true;
      console.log("B MAYUSCULA");
    } else if (this.contadorImagenes == 6){
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
      this.imagen1='assets/material/10/1/banano.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A banano");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/10/1/barrilete.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A barrilete");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/10/1/bicicleta.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A bicicleta");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/10/2/3.png';
      this.anterior=true;
      console.log("B MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/10/2/4.png';
      this.anterior=true;
      console.log("B MAYUSCULA");
    } else if (this.contadorImagenes == 6){
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
