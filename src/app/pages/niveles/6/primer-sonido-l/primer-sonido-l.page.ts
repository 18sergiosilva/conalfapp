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
  selector: 'app-primer-sonido-l',
  templateUrl: './primer-sonido-l.page.html',
  styleUrls: ['./primer-sonido-l.page.scss'],
})
export class PrimerSonidoLPage implements OnInit {

  imagen1 = 'assets/material/6/1/lidia.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoL', 'assets/material/sonidoLetras/l.mp3');

    this.audio.preload('lima', 'assets/material/6/1/lima.mp3');
    this.audio.preload('loro', 'assets/material/6/1/loro.mp3');
    this.audio.preload('lidia', 'assets/material/6/1/lidia.mp3');

    this.audio.preload('lMinuscula', 'assets/material/6/2/minuscula.mp3');
    this.audio.preload('lMayuscula', 'assets/material/6/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/6/1/lidia.PNG') {
      this.audio.play('lidia');
    } else if (this.imagen1==='assets/material/6/1/lima.PNG'){
      this.audio.play('lima');
    } else if (this.imagen1==='assets/material/6/1/loro.PNG'){
      this.audio.play('loro');
    } else if (this.imagen1==='assets/material/6/2/3.png'){
      this.audio.play('lMinuscula');
    } else if (this.imagen1==='assets/material/6/2/4.png'){
      this.audio.play('lMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoL');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/6/1/lidia.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A lidia");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/6/1/lima.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A lima");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/6/1/loro.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A loro");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/6/2/3.png';
      this.anterior=true;
      console.log("L MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/6/2/4.png';
      this.anterior=true;
      console.log("L MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segunda-pagina-l');
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/6/1/lidia.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A lidia");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/6/1/lima.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A lima");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/6/1/loro.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A loro");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/6/2/3.png';
      this.anterior=true;
      console.log("L MINUSCULA");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/6/2/4.png';
      this.anterior=true;
      console.log("L MAYUSCULA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Video';
      this.texto = 'Presiona para ver el video de la letra';
      this.imagen1='assets/material/paraVideo.png';
      this.anterior=true;
      console.log("PASANDO AL VIDEO");
    } else {
      this.navCtrl.navigateForward('segunda-pagina-l');
    }
  }

}
