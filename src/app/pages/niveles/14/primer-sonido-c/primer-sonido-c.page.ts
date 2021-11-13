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
  selector: 'app-primer-sonido-c',
  templateUrl: './primer-sonido-c.page.html',
  styleUrls: ['./primer-sonido-c.page.scss'],
})
export class PrimerSonidoCPage implements OnInit {

  imagen1 = 'assets/material/14/1/cama.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoC', 'assets/material/sonidoLetras/c.mp3');

    this.audio.preload('casa', 'assets/material/14/1/casa.mp3');
    this.audio.preload('coco', 'assets/material/14/1/coco.mp3');
    this.audio.preload('cama', 'assets/material/14/1/cama.mp3');

    this.audio.preload('cMinuscula', 'assets/material/14/2/minuscula.mp3');
    this.audio.preload('cMayuscula', 'assets/material/14/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/14/1/cama.PNG') {
      this.audio.play('cama');
    } else if (this.imagen1==='assets/material/14/1/casa.PNG'){
      this.audio.play('casa');
    } else if (this.imagen1==='assets/material/14/1/coco.PNG'){
      this.audio.play('coco');
    } else if (this.imagen1==='assets/material/14/2/3.png'){
      this.audio.play('cMinuscula');
    } else if (this.imagen1==='assets/material/14/2/4.png'){
      this.audio.play('cMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoC');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/14/1/cama.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A cama");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/14/1/casa.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A casa");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/14/1/coco.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A coco");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/14/2/3.png';
      this.anterior=true;
      console.log("C MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/14/2/4.png';
      this.anterior=true;
      console.log("C MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-c');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/14/1/cama.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A cama");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/14/1/casa.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A casa");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/14/1/coco.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A coco");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/14/2/3.png';
      this.anterior=true;
      console.log("C MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/14/2/4.png';
      this.anterior=true;
      console.log("C MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-c');
    }
  }

}
