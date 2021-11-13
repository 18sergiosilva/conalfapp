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
  selector: 'app-primer-sonido-n',
  templateUrl: './primer-sonido-n.page.html',
  styleUrls: ['./primer-sonido-n.page.scss'],
})
export class PrimerSonidoNPage implements OnInit {

  imagen1 = 'assets/material/11/1/niño.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoN', 'assets/material/sonidoLetras/n.mp3');

    this.audio.preload('nube', 'assets/material/11/1/nube.mp3');
    this.audio.preload('niño', 'assets/material/11/1/niño.mp3');

    this.audio.preload('nMinuscula', 'assets/material/11/2/minuscula.mp3');
    this.audio.preload('nMayuscula', 'assets/material/11/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/11/1/niño.PNG') {
      this.audio.play('niño');
    } else if (this.imagen1==='assets/material/11/1/nube.PNG'){
      this.audio.play('nube');
    } else if (this.imagen1==='assets/material/11/2/3.png'){
      this.audio.play('nMinuscula');
    } else if (this.imagen1==='assets/material/11/2/4.png'){
      this.audio.play('nMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoN');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/11/1/niño.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A niño");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/11/1/nube.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A nube");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/11/2/3.png';
      this.anterior=true;
      console.log("N MINUSCULA");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/11/2/4.png';
      this.anterior=true;
      console.log("N MAYUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-n');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/11/1/niño.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A niño");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/11/1/nube.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A nube");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/11/2/3.png';
      this.anterior=true;
      console.log("N MINUSCULA");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/11/2/4.png';
      this.anterior=true;
      console.log("N MAYUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-n');
    }
  }

}
