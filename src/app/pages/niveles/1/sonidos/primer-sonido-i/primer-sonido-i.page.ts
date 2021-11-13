import { Component, OnInit } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';
import {AudioService} from '../../../../../services/audio.service';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';
  
@Component({
  selector: 'app-primer-sonido-i',
  templateUrl: './primer-sonido-i.page.html',
  styleUrls: ['./primer-sonido-i.page.scss'],
})
export class PrimerSonidoIPage implements OnInit {

  imagen1 = 'assets/material/1/1/iguana.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;
  

  constructor(public navCtrl: NavController, public audio: AudioService) { 
    
  }

  ngOnInit() {
    this.audio.preload('sonidoI', 'assets/material/sonidoLetras/i.mp3');

    this.audio.preload('incendio', 'assets/material/1/1/incendio.mp3');
    this.audio.preload('injerto', 'assets/material/1/1/injerto.mp3');
    this.audio.preload('insectos', 'assets/material/1/1/insectos.mp3');
    this.audio.preload('isla', 'assets/material/1/1/isla.mp3');
    this.audio.preload('iguana', 'assets/material/1/1/iguana.mp3');

    this.audio.preload('iMinuscula', 'assets/material/1/2/minuscula.mp3');
    this.audio.preload('iMayuscula', 'assets/material/1/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/1/1/iguana.PNG') {
      this.audio.play('iguana');
    } else if (this.imagen1==='assets/material/1/1/incendio.PNG'){
      this.audio.play('incendio');
    } else if (this.imagen1==='assets/material/1/1/injerto.PNG'){
      this.audio.play('injerto');
    } else if (this.imagen1==='assets/material/1/1/insectos.PNG'){
      this.audio.play('insectos');
    } else if (this.imagen1==='assets/material/1/1/isla.PNG'){
      this.audio.play('isla');
    } else if (this.imagen1==='assets/material/1/2/3.png'){
      this.audio.play('iMinuscula');
    } else if (this.imagen1==='assets/material/1/2/4.png'){
      this.audio.play('iMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoI');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/iguana.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A IGUANA");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/incendio.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INCENDIO");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/injerto.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INJERTO");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/insectos.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INSECTOS");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/isla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ISLA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/1/2/3.png';
      this.anterior=true;
      console.log("I MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/1/2/4.png';
      this.anterior=true;
      console.log("I MAYUSCULA");
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
      this.imagen1='assets/material/1/1/iguana.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A IGUANA");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/incendio.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INCENDIO");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/injerto.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INJERTO");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/insectos.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INSECTOS");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/1/1/isla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ISLA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/1/2/3.png';
      this.anterior=true;
      console.log("I MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/1/2/4.png';
      this.anterior=true;
      console.log("I MAYUSCULA");
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
