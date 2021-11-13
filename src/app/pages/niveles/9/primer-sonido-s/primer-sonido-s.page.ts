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
  selector: 'app-primer-sonido-s',
  templateUrl: './primer-sonido-s.page.html',
  styleUrls: ['./primer-sonido-s.page.scss'],
})
export class PrimerSonidoSPage implements OnInit {

  imagen1 = 'assets/material/9/1/sapo.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoS', 'assets/material/sonidoLetras/s.mp3');

    this.audio.preload('serrucho', 'assets/material/9/1/serrucho.mp3');
    this.audio.preload('silla', 'assets/material/9/1/silla.mp3');
    this.audio.preload('sapo', 'assets/material/9/1/sapo.mp3');

    this.audio.preload('sMinuscula', 'assets/material/9/2/minuscula.mp3');
    this.audio.preload('sMayuscula', 'assets/material/9/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/9/1/sapo.PNG') {
      this.audio.play('sapo');
    } else if (this.imagen1==='assets/material/9/1/serrucho.PNG'){
      this.audio.play('serrucho');
    } else if (this.imagen1==='assets/material/9/1/silla.PNG'){
      this.audio.play('silla');
    } else if (this.imagen1==='assets/material/9/2/3.png'){
      this.audio.play('sMinuscula');
    } else if (this.imagen1==='assets/material/9/2/4.png'){
      this.audio.play('sMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoS');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/9/1/sapo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A sapo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/9/1/serrucho.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A serrucho");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/9/1/silla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A silla");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/9/2/3.png';
      this.anterior=true;
      console.log("S MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/9/2/4.png';
      this.anterior=true;
      console.log("S MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-s');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/9/1/sapo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A sapo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/9/1/serrucho.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A serrucho");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/9/1/silla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A silla");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/9/2/3.png';
      this.anterior=true;
      console.log("S MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/9/2/4.png';
      this.anterior=true;
      console.log("S MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-s');
    }
  }

}
