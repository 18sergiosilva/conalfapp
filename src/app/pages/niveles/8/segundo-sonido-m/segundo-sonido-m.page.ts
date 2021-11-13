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
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-segundo-sonido-m',
  templateUrl: './segundo-sonido-m.page.html',
  styleUrls: ['./segundo-sonido-m.page.scss'],
})
export class SegundoSonidoMPage implements OnInit {

  
  imagen1 = 'assets/material/8/4/1.PNG'
  texto = 'Escribe la silaba que corresponde'
  anterior:boolean=false;
  contadorImagenes = 1;
  titulo = 'Práctica';
  usuario:any = '';
  mayus:any = '';

  options: VideoOptions;

  constructor(public navCtrl: NavController, public audio: AudioService) { }

  ngOnInit() {
    
    this.audio.preload('uno', 'assets/material/8/4/1.mp3');
    this.audio.preload('dos', 'assets/material/8/4/2.mp3');
    this.audio.preload('tres', 'assets/material/8/4/3.mp3');
    this.audio.preload('cuatro', 'assets/material/8/4/4.mp3');
  }

  ngAfterViewInit(){
    
  }

  sonidos(){
    if(this.imagen1==='assets/material/8/4/1.PNG') {
      this.audio.play('uno');
    } else if (this.imagen1==='assets/material/8/4/2.PNG'){
      this.audio.play('dos');
    } else if (this.imagen1==='assets/material/8/4/3.PNG'){
      this.audio.play('tres');
    } else if (this.imagen1==='assets/material/8/4/4.PNG'){
      this.audio.play('cuatro');
    } 
  }

  siguienteImagen(){
    this.mayus = this.usuario.toUpperCase();
    if(this.contadorImagenes == 1 && this.mayus == 'MO'){
      alert("¡Felicidades! Respuesta correcta");
      this.contadorImagenes = this.contadorImagenes + 1;
      this.imagen1='assets/material/8/4/2.PNG';
      this.anterior=false;
      this.usuario = '';
    } else if(this.contadorImagenes == 2 && this.mayus == 'MO'){
      alert("¡Felicidades! Respuesta correcta");
      this.contadorImagenes = this.contadorImagenes + 1;
      this.imagen1='assets/material/8/4/3.PNG';
      this.anterior=false;
      this.usuario = '';
    } else if(this.contadorImagenes == 3 && this.mayus == 'MA'){
      alert("¡Felicidades! Respuesta correcta");
      this.contadorImagenes = this.contadorImagenes + 1;
      this.imagen1='assets/material/8/4/4.PNG';
      this.anterior=false;
      this.usuario = '';
    } else if(this.contadorImagenes == 4 && this.mayus == 'MA'){
      alert("¡Felicidades! Respuesta correcta");
      this.contadorImagenes = this.contadorImagenes + 1;
      this.anterior=false;
      this.usuario = '';
      this.navCtrl.navigateForward('home-results');
    } else {
      alert("Te has equivocado. Intenta nuevamente");
    }
  }

}
