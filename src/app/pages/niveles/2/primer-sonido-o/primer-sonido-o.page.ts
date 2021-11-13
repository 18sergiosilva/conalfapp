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
  selector: 'app-primer-sonido-o',
  templateUrl: './primer-sonido-o.page.html',
  styleUrls: ['./primer-sonido-o.page.scss'],
})
export class PrimerSonidoOPage implements OnInit {

  imagen1 = 'assets/material/2/1/ojo.PNG'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';
  texto = 'Presiona para escuchar el sonido'

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoO', 'assets/material/sonidoLetras/o.mp3');

    this.audio.preload('olla', 'assets/material/2/1/olla.mp3');
    this.audio.preload('oreja', 'assets/material/2/1/oreja.mp3');
    this.audio.preload('oso', 'assets/material/2/1/oso.mp3');
    this.audio.preload('oveja', 'assets/material/2/1/oveja.mp3');
    this.audio.preload('ojo', 'assets/material/2/1/ojo.mp3');

    this.audio.preload('oMinuscula', 'assets/material/2/2/minuscula.mp3');
    this.audio.preload('oMayuscula', 'assets/material/2/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/2/1/ojo.PNG') {
      this.audio.play('ojo');
    } else if (this.imagen1==='assets/material/2/1/olla.PNG'){
      this.audio.play('olla');
    } else if (this.imagen1==='assets/material/2/1/oreja.PNG'){
      this.audio.play('oreja');
    } else if (this.imagen1==='assets/material/2/1/oso.PNG'){
      this.audio.play('oso');
    } else if (this.imagen1==='assets/material/2/1/oveja.PNG'){
      this.audio.play('oveja');
    } else if (this.imagen1==='assets/material/2/2/3.png'){
      this.audio.play('oMinuscula');
    } else if (this.imagen1==='assets/material/2/2/4.png'){
      this.audio.play('oMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoO');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/ojo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A ojo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/olla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A olla");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/oreja.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A oreja");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/oso.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A oso");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/oveja.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A oveja");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/2/2/3.png';
      this.anterior=true;
      console.log("O MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/2/2/4.png';
      this.anterior=true;
      console.log("O MAYUSCULA");
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
      this.imagen1='assets/material/2/1/ojo.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A ojo");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/olla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A olla");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/oreja.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A oreja");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/oso.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A oso");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/2/1/oveja.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A oveja");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/2/2/3.png';
      this.anterior=true;
      console.log("O MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/2/2/4.png';
      this.anterior=true;
      console.log("O MAYUSCULA");
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
