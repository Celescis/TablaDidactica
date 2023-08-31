import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { UserService } from '../../servicios/usuario/user.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  tema: string = 'animales';
  rutaIdioma: string = "/assets/idiomas/espanol.png";
  rutaTema: string = "/assets/temas/animales/animales.png";
  idioma: string = 'espanol'
  showSpinner: boolean = false;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    StatusBar.hide();
  }

  cambiarIdiomaElegido(ruta: string, idiomaSeleccionado: string) {
    this.rutaIdioma = ruta;
    this.idioma = idiomaSeleccionado;
  }

  cambiarTemaElegido(ruta: string, temaElegido: string) {
    this.showSpinner = true

    setTimeout(() => {
      this.rutaTema = ruta;
      this.tema = temaElegido;
      this.showSpinner = false;
    }, 2000);

  }

  generarSonido(objeto: string) {
    const ruta = `/assets/audios/${this.idioma}/${objeto}`
    const audio = new Audio(ruta);
    audio.play();
  }

  cerrarSesion() {
    setTimeout(() => {
      this.userService.logout();
    }, 2200);
  }

}
