import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../servicios/usuario/user.service';
import { StatusBar } from '@capacitor/status-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  correo: FormControl = new FormControl('', [Validators.required, Validators.email]);

  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  showSpinner: boolean = false;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    StatusBar.hide();
  }

  Login() {
    this.showSpinner = true;
    setTimeout(() => {
      const correoL = this.correo.value?.toString()
      const passL = this.password.value?.toString()
      this.showSpinner = false;
      this.userService.login(correoL, passL);
    }, 3000);
  }

  CargaUsuarios(boton: any) {
    let correo;
    let password;

    switch (boton) {
      case 1:
        correo = "admin@admin.com";
        password = "111111";
        break;
      case 2:
        correo = "usuario@usuario.com";
        password = "333333";
        break;
      case 3:
        correo = "invitado@invitado.com";
        password = "222222";
        break;
      default:
        correo = "";
        password = "";
    }

    this.correo.setValue(correo);
    this.password.setValue(password);
  }


  ionViewWillLeave() {
    this.correo.reset();
    this.password.reset();
  }
}


