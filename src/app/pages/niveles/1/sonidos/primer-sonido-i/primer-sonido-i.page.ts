import { Component, OnInit } from '@angular/core';

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
  

  constructor() { }

  ngOnInit() {
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
    }
  }

  sonidoLetra(){
    console.log("SONANDO LETRA I");
  }

  siguienteImagen(){
    this.contadorImagenes = this.contadorImagenes + 1;
    if (this.contadorImagenes == 1){
      this.imagen1='assets/material/1/1/iguana.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A IGUANA");
    } else if (this.contadorImagenes == 2){
      this.imagen1='assets/material/1/1/incendio.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INCENDIO");
    } else if (this.contadorImagenes == 3){
      this.imagen1='assets/material/1/1/injerto.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INJERTO");
    } else if (this.contadorImagenes == 4){
      this.imagen1='assets/material/1/1/insectos.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INSECTOS");
    } else if (this.contadorImagenes == 5){
      this.imagen1='assets/material/1/1/isla.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A ISLA");
    } else if (this.contadorImagenes == 6){
      console.log("PASANDO AL OTRO NIVEL");
    }
  }

  anteriorImagen(){
    this.contadorImagenes = this.contadorImagenes - 1;
    if (this.contadorImagenes == 1){
      this.imagen1='assets/material/1/1/iguana.PNG';
      this.anterior=false;
      console.log("PRESENTANDO A IGUANA");
    } else if (this.contadorImagenes == 2){
      this.imagen1='assets/material/1/1/incendio.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INCENDIO");
    } else if (this.contadorImagenes == 3){
      this.imagen1='assets/material/1/1/injerto.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INJERTO");
    } else if (this.contadorImagenes == 4){
      this.imagen1='assets/material/1/1/insectos.PNG';
      this.anterior=true;
      console.log("PRESENTANDO A INSECTOS");
    } else if (this.contadorImagenes == 5){
      this.imagen1='assets/material/1/2/3.png';
      this.anterior=true;
      console.log("PRESENTANDO A ISLA");
    } else if (this.contadorImagenes == 6){
      console.log("PASANDO AL OTRO NIVEL");
    }
  }

  

}
