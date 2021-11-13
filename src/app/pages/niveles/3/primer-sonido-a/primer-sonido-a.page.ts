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
  selector: 'app-primer-sonido-a',
  templateUrl: './primer-sonido-a.page.html',
  styleUrls: ['./primer-sonido-a.page.scss'],
})
export class PrimerSonidoAPage implements OnInit {

  imagen1 = 'assets/material/3/1/aguacate.PNG'
  texto = 'Presiona para escuchar el sonido'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('sonidoA', 'assets/material/sonidoLetras/a.mp3');

    this.audio.preload('araña', 'assets/material/3/1/araña.mp3');
    this.audio.preload('arbol', 'assets/material/3/1/arbol.mp3');
    this.audio.preload('ardilla', 'assets/material/3/1/ardilla.mp3');
    this.audio.preload('azadon', 'assets/material/3/1/azadon.mp3');
    this.audio.preload('aguacate', 'assets/material/3/1/aguacate.mp3');

    this.audio.preload('aMinuscula', 'assets/material/3/2/minuscula.mp3');
    this.audio.preload('aMayuscula', 'assets/material/3/2/mayuscula.mp3');

  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/3/1/aguacate.PNG') {
      this.audio.play('aguacate');
    } else if (this.imagen1==='assets/material/3/1/araña.PNG'){
      this.audio.play('araña');
    } else if (this.imagen1==='assets/material/3/1/arbol.PNG'){
      this.audio.play('arbol');
    } else if (this.imagen1==='assets/material/3/1/ardilla.PNG'){
      this.audio.play('ardilla');
    } else if (this.imagen1==='assets/material/3/1/azadon.PNG'){
      this.audio.play('azadon');
    } else if (this.imagen1==='assets/material/3/2/3.png'){
      this.audio.play('aMinuscula');
    } else if (this.imagen1==='assets/material/3/2/4.png'){
      this.audio.play('aMayuscula');
    }
  }

  sonidoLetra(){
    this.audio.play('sonidoA');
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/aguacate.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A aguacate");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/araña.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A araña");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/arbol.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A arbol");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/ardilla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ardilla");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/azadon.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A azadon");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/3/2/3.png';
      this.anterior=true;
      console.log("A MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/3/2/4.png';
      this.anterior=true;
      console.log("A MAYUSCULA");
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
      this.imagen1='assets/material/3/1/aguacate.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A aguacate");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/araña.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A araña");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/arbol.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A arbol");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/ardilla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ardilla");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.texto = 'Presiona para escuchar el sonido';
      this.imagen1='assets/material/3/1/azadon.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A azadon");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/3/2/3.png';
      this.anterior=true;
      console.log("A MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.texto = 'Presiona para aprender a escribir la letra';
      this.imagen1='assets/material/3/2/4.png';
      this.anterior=true;
      console.log("A MAYUSCULA");
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
