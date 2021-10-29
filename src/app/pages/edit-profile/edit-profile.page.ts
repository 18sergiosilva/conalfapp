import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  departamento:any = 'Guatemala';
  municipio:any = 'Guatemala';
  usuario:any = 'Sergio Silva';
  
  departamentos:any = ['Alta Verapaz', 'Baja Verapaz','Chimaltenango','Chiquimula','El Progreso','Escuintla','Guatemala','Huehuetenango','Izabal','Jalapa','Jutiapa','Petén','Quetzaltenango','Quiché','Retalhuleu','Sacatepéquez','San Marcos','Santa Rosa','Sololá','Suchitepéquez','Totonicapán','Zacapa'];
  altaVerapaz:any=['Chahal','Chisec','Cobán','Fray Bartolomé de las Casas','La Tinta','Lanquín','Panzós','Raxruhá','San Cristóbal Verapaz','San Juan Chamelco','San Pedro Carchá','Santa Cruz Verapaz','Santa María Cahabón','Senahú','Tamahú','Tactic','Tucurú'];
  bajaVerapaz:any=['Cubulco','Granados','Purulhá','Rabinal','Salamá','San Jerónimo','San Miguel Chicaj','	Santa Cruz el Chol'];
  chimaltenango:any=['Acatenango','Chimaltenango','El Tejar','Parramos','Patzicía','Patzún','Pochuta','San Andrés Itzapa','San José Poaquíl','San Juan Comalapa','San Martín Jilotepeque','Santa Apolonia','Santa Cruz Balanyá','Tecpán','Yepocapa','Zaragoza'];
  chiquimula:any=['Camotán','Chiquimula','Concepción Las Minas','Esquipulas','Ipala','Jocotán','Olopa','Quetzaltepeque','San Jacinto','San José la Arada','San Juan Ermita'];
  elProgreso:any=['El Jícaro','Guastatoya','Morazán','San Agustín Acasaguastlán','San Antonio La Paz','San Cristóbal Acasaguastlán','Sanarate','Sansare'];
  escuintla:any=['Escuintla','Guanagazapa','Iztapa','La Democracia','La Gomera','Masagua','Nueva Concepción','Palín','San José','San Vicente Pacaya','Santa Lucía Cotzumalguapa','Sipacate','Siquinalá','Tiquisate'];
  guatemala:any=['Amatitlán','Chinautla','Chuarrancho','Guatemala','Fraijanes','Mixco','Palencia','San José del Golfo','San José Pinula','San Juan Sacatepéquez','San Miguel Petapa','San Pedro Ayampuc','San Pedro Sacatepéquez','San Raymundo','Santa Catarina Pinula','Villa Canales','Villa Nueva'];
  huehuetenango:any=['Aguacatán','Chiantla','Colotenango','Concepción Huista','Cuilco','Huehetenango','Jacaltenango','La Democracia','La Libertad','Malacatancito','Nentón','Petatán','San Antonio Huista','San Gaspar Ixchil','San Ildefonso Ixtahuacán','San Juan Atitán','San Juan Ixcoy','San Mateo Ixtatán','San Miguel Acatán','San Pedro Nécta','San Pedro Soloma','San Rafael La Independencia','San Rafael Pétzal','San Sebastián Coatán','San Sebastián Huehuetenango','Santa Ana Huista','Santa Bárbara','Santa Cruz Barillas','Santa Eulalia','Santiago Chimaltenango','Tectitán','Todos Santos Cuchumatán','Unión Cantinil'];
  izabal:any=['El Estor','Livingston','Los Amates','Morales','Puerto Barrios'];
  jalapa:any=['Jalapa','Mataquescuintla','Monjas','San Carlos Alzatate','San Luis Jilotepeque','San Manuel Chaparrón','San Pedro Pinula'];
  jutiapa:any=['Agua Blanca','Asunción Mita','Atescatempa','Comapa','Conguaco','El Adelanto','El Progreso','Jalpatagua','Jerez','Jutiapa','Moyuta','Pasaco','Quesada','San José Acatempa','Santa Catarina Mita','Yupiltepeque','Zapotitlán'];
  peten:any=['Dolores','El Chal','Flores','La Libertad','Las Cruces','Melchor de Mencos','Poptún','San Andrés','San Benito','San Francisco','San José','San Luis','Santa Ana','Sayaxché'];
  quetzaltenango:any=['Almolonga','Cabricán','Cajolá','Cantel','Coatepeque','Colomba Costa Cuca','Concepción Chiquirichapa','El Palmar','Flores Costa Cuca','Génova','Huitán','La Esperanza','Olintepeque','Palestina de Los Altos','Quetzaltenango','Salcajá','San Carlos Sija','San Francisco La Unión','San Juan Ostuncalco','San Martín Sacatepéquez','San Mateo','San Miguel Sigüilá','Sibilia','Zunil'];
  quiche:any=['Canillá','Chajul','Chicamán','Chiché','Santo Tomás Chichicastenango','Chinique','Cunén','Ixcán','Joyabaj','Nebaj','Pachalum','Patzité','Sacapulas','San Andrés Sajcabajá','San Antonio Ilotenango','San Bartolomé Jocotenango','San Juan Cotzal','San Pedro Jocopilas','Santa Cruz del Quiché','Uspantán','Zacualpa'];
  reu:any=['Champerico','El Asintal','Nuevo San Carlos','Retalhuleu','San Andrés Villa Seca','San Felipe','San Martín Zapotitlán','San Sebastián','Santa Cruz Muluá'];
  sacatepequez:any=['Alotenango','Ciudad Vieja','Jocotenango','Antigua Guatemala','Magdalena Milpas Altas','Pastores','San Antonio Aguas Calientes','San Bartolomé Milpas Altas','San Lucas Sacatepéquez','San Miguel Dueñas','Santa Catarina Barahona','Santa Lucía Milpas Altas','Santa María de Jesús','Santiago Sacatepéquez','Santo Domingo Xenacoj','Sumpango'];
  sanMarcos:any=['Ayutla','Catarina','Comitancillo','Concepción Tutuapa','El Quetzal','El Tumbador','Esquipulas Palo Gordo','Ixchiguán','La Blanca','La Reforma','Malacatán','Nuevo Progreso','Ocós','Pajapita','	Río Blanco','San Antonio Sacatepéquez','San Cristóbal Cucho','San José El Rodeo','San José Ojetenam','San Lorenzo','San Marcos','San Miguel Ixtahuacán','San Pablo','San Pedro Sacatepéquez','San Rafael Pie de la Cuesta','Sibinal','Sipacapa','Tacaná','Tajumulco','Tejutla'];
  santaRosa:any=['Barberena','Casillas','Chiquimulilla','Cuilapa','Guazacapán','Nueva Santa Rosa','Oratorio','Pueblo Nuevo Viñas','San Juan Tecuaco','San Rafael las Flores','Santa Cruz Naranjo','Santa María Ixhuatán','Santa Rosa de Lima','Taxisco'];
  solola:any=['Concepción','Nahualá','Panajachel','San Andrés Semetabaj','San Antonio Palopó','San José Chacayá','San Juan La Laguna','San Lucas Tolimán','San Marcos La Laguna','San Pablo La Laguna','San Pedro La Laguna','Santa Catarina Ixtahuacán','Santa Catarina Palopó','Santa Clara La Laguna','Santa Cruz La Laguna','Santa Lucía Utatlán','Santa María Visitación','Santiago Atitlán','Sololá'];
  suchitepequez:any=['Chicacao','Cuyotenango','Mazatenango','Patulul','Pueblo Nuevo','Río Bravo','Samayac','San Antonio Suchitepéquez','San Bernardino','San Francisco Zapotitlán','San Gabriel','San José El Ídolo','San José La Máquina','San Juan Bautista','San Lorenzo','San Miguel Panán','San Pablo Jocopilas','Santa Bárbara','Santo Domingo Suchitepéquez','Santo Tomás La Unión','Zunilito'];
  totonicapan:any=['Momostenango','San Andrés Xecul','San Bartolo','San Cristóbal Totonicapán','San Francisco El Alto','Santa Lucía La Reforma','Santa María Chiquimula','Totonicapán'];
  zacapa:any=['Cabañas','Estanzuela','Gualán','Huité','La Unión','Río Hondo','San Diego','San Jorge','Teculután','Usumatlán','Zacapa'];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }

}
