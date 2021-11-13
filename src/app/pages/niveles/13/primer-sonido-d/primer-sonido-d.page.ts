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
  selector: 'app-primer-sonido-d',
  templateUrl: './primer-sonido-d.page.html',
  styleUrls: ['./primer-sonido-d.page.scss'],
})
export class PrimerSonidoDPage implements OnInit {

  imagen1 = 'assets/material/13/1/dado.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoD', 'assets/material/sonidoLetras/d.mp3');

    this.audio.preload('dulce', 'assets/material/13/1/dulce.mp3');
    this.audio.preload('durazno', 'assets/material/13/1/durazno.mp3');
    this.audio.preload('dado', 'assets/material/13/1/dado.mp3');

    this.audio.preload('dMinuscula', 'assets/material/13/2/minuscula.mp3');
    this.audio.preload('dMayuscula', 'assets/material/13/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/13/1/dado.PNG') {
      this.audio.play('dado');
    } else if (this.imagen1==='assets/material/13/1/dulce.PNG'){
      this.audio.play('dulce');
    } else if (this.imagen1==='assets/material/13/1/durazno.PNG'){
      this.audio.play('durazno');
    } else if (this.imagen1==='assets/material/13/2/3.png'){
      this.audio.play('dMinuscula');
    } else if (this.imagen1==='assets/material/13/2/4.png'){
      this.audio.play('dMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoD');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/13/1/dado.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A dado");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/13/1/dulce.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A dulce");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/13/1/durazno.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A durazno");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/13/2/3.png';
      this.anterior=true;
      console.log("D MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/13/2/4.png';
      this.anterior=true;
      console.log("D MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-d');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/13/1/dado.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A dado");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/13/1/dulce.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A dulce");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/13/1/durazno.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A durazno");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/13/2/3.png';
      this.anterior=true;
      console.log("D MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/13/2/4.png';
      this.anterior=true;
      console.log("D MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segundo-sonido-d');
    }
  }

}
