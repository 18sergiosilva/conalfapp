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
  selector: 'app-primer-sonido-m',
  templateUrl: './primer-sonido-m.page.html',
  styleUrls: ['./primer-sonido-m.page.scss'],
})
export class PrimerSonidoMPage implements OnInit {

  imagen1 = 'assets/material/8/1/mesa.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoM', 'assets/material/sonidoLetras/m.mp3');

    this.audio.preload('moña', 'assets/material/8/1/moña.mp3');
    this.audio.preload('mundo', 'assets/material/8/1/mundo.mp3');
    this.audio.preload('mesa', 'assets/material/8/1/mesa.mp3');

    this.audio.preload('mMinuscula', 'assets/material/8/2/minuscula.mp3');
    this.audio.preload('mMayuscula', 'assets/material/8/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/8/1/mesa.PNG') {
      this.audio.play('mesa');
    } else if (this.imagen1==='assets/material/8/1/moña.PNG'){
      this.audio.play('moña');
    } else if (this.imagen1==='assets/material/8/1/mundo.PNG'){
      this.audio.play('mundo');
    } else if (this.imagen1==='assets/material/8/2/3.png'){
      this.audio.play('mMinuscula');
    } else if (this.imagen1==='assets/material/8/2/4.png'){
      this.audio.play('mMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoM');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/8/1/mesa.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A mesa");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/8/1/moña.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A moña");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/8/1/mundo.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A mundo");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/8/2/3.png';
      this.anterior=true;
      console.log("M MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/8/2/4.png';
      this.anterior=true;
      console.log("M MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-m');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/8/1/mesa.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A mesa");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/8/1/moña.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A moña");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/8/1/mundo.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A mundo");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/8/2/3.png';
      this.anterior=true;
      console.log("M MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/8/2/4.png';
      this.anterior=true;
      console.log("M MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-m');
    }
  }

}
