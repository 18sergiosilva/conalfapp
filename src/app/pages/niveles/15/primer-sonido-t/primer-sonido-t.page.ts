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
  selector: 'app-primer-sonido-t',
  templateUrl: './primer-sonido-t.page.html',
  styleUrls: ['./primer-sonido-t.page.scss'],
})
export class PrimerSonidoTPage implements OnInit {

  imagen1 = 'assets/material/15/1/taza.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoT', 'assets/material/sonidoLetras/t.mp3');

    this.audio.preload('tenedor', 'assets/material/15/1/tenedor.mp3');
    this.audio.preload('tortuga', 'assets/material/15/1/tortuga.mp3');
    this.audio.preload('taza', 'assets/material/15/1/taza.mp3');

    this.audio.preload('tMinuscula', 'assets/material/15/2/minuscula.mp3');
    this.audio.preload('tMayuscula', 'assets/material/15/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/15/1/taza.PNG') {
      this.audio.play('taza');
    } else if (this.imagen1==='assets/material/15/1/tenedor.PNG'){
      this.audio.play('tenedor');
    } else if (this.imagen1==='assets/material/15/1/tortuga.PNG'){
      this.audio.play('tortuga');
    } else if (this.imagen1==='assets/material/15/2/3.png'){
      this.audio.play('tMinuscula');
    } else if (this.imagen1==='assets/material/15/2/4.png'){
      this.audio.play('tMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoT');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/15/1/taza.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A taza");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/15/1/tenedor.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A tenedor");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/15/1/tortuga.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A tortuga");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/15/2/3.png';
      this.anterior=true;
      console.log("T MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/15/2/4.png';
      this.anterior=true;
      console.log("T MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-t');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/15/1/taza.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A taza");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/15/1/tenedor.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A tenedor");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/15/1/tortuga.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A tortuga");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/15/2/3.png';
      this.anterior=true;
      console.log("T MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/15/2/4.png';
      this.anterior=true;
      console.log("T MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-t');
    }
  }

}
