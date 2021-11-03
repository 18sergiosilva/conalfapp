import { Component, OnInit } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-primer-sonido-i',
  templateUrl: './primer-sonido-i.page.html',
  styleUrls: ['./primer-sonido-i.page.scss'],
})
export class PrimerSonidoIPage implements OnInit {

  themeCover = 'assets/material/1/letra.PNG';
  imagen1 = 'assets/material/1/1/iguana.PNG'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Familiarizacion';

  options: VideoOptions;
  

  constructor(private videoPlayer: VideoPlayer) { 
    this.options = {
      scalingMode: 0,
      volume: 0.5
    };
  }

  ngOnInit() {
  }


  playLocalVideo() {
    // Playing a video.
    this.videoPlayer.play('assets/material/1/3/videoi.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      alert(err);
    });
  }

  playRemoteVideo() {
    // Playing a video.
    this.videoPlayer.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      alert(err);
    });
  }

  closeVideo() {
    this.videoPlayer.close();
  }

  sonidos(){
    if(this.imagen1==='assets/material/1/1/iguana.PNG') {
      console.log("SONANDO IGUANA");
    } else if (this.imagen1==='assets/material/1/1/incendio.PNG'){
      console.log("SONANDO INCENDIO");
    } else if (this.imagen1==='assets/material/1/1/injerto.PNG'){
      console.log("SONANDO INJERTO");
    } else if (this.imagen1==='assets/material/1/1/insectos.PNG'){
      console.log("SONANDO INSECTOS");
    } else if (this.imagen1==='assets/material/1/1/isla.PNG'){
      console.log("SONANDO ISLA");
    } else if (this.imagen1==='assets/material/1/2/3.png'){
      console.log("SONANDO I MINUSCULA");
    } else if (this.imagen1==='assets/material/1/2/4.png'){
      console.log("SONANDO I MAYUSCULA");
    }
  }

  sonidoLetra(){
    console.log("SONANDO LETRA I");
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/iguana.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A IGUANA");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/incendio.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INCENDIO");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/injerto.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INJERTO");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/insectos.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INSECTOS");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/isla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ISLA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.imagen1='assets/material/1/2/3.png';
      this.anterior=true;
      console.log("I MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.imagen1='assets/material/1/2/4.png';
      this.anterior=true;
      console.log("I MAYUSCULA");
    } else {
      console.log("PASANDO AL VIDEO");
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/iguana.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A IGUANA");
    } else if (this.contadorImagenes == 2){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/incendio.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INCENDIO");
    } else if (this.contadorImagenes == 3){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/injerto.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INJERTO");
    } else if (this.contadorImagenes == 4){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/insectos.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INSECTOS");
    } else if (this.contadorImagenes == 5){
      this.titulo = 'Familiarizacion';
      this.imagen1='assets/material/1/1/isla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ISLA");
    } else if (this.contadorImagenes == 6){
      this.titulo = 'Escritura';
      this.imagen1='assets/material/1/2/3.png';
      this.anterior=true;
      console.log("I MINUSCULA");
    } else if (this.contadorImagenes == 7){
      this.titulo = 'Escritura';
      this.imagen1='assets/material/1/2/4.png';
      this.anterior=true;
      console.log("I MAYUSCULA");
    } else if (this.contadorImagenes == 8){
      console.log("PASANDO AL VIDEO");
    }
  }

  

}
