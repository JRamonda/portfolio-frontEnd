import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

  Messages = {
    RD: ' Revisar los datos ingresados...',
    EE: ' Usuario o contraseña son incorrectos...',
  };

  type: string = "password";
  isText: boolean = false;

  ErrorMessage = false;

  constructor(
    // private usersService: UsersService, 
    // private router: Router
    ) {
      // const token = localStorage.getItem('token');
      // if (token) this.router.navigate(['/inicio']);
    }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  Login() {
    this.submitted = true;
    // verificar que los validadores esten OK
    if (this.FormLogin.invalid) {
      return;
    }

    //hacemos una copia de los datos del formulario, para enviarlo al servidor
    const itemCopy: any = {
      username: this.FormLogin.value.Username,
      password: this.FormLogin.value.Password,
    };

    //buscar si existe el usuario o no para luego crearlo
    // this.usersService.login(itemCopy).subscribe({
    //   next: (data: any) => {
    //     this.FormLogin.reset();
    //     this.usersService.storeToken(data.token);
    //     this.usersService.storeUser(data.userResult);
    //     this.router.navigate(['inicio']);
    //   },
    //   error: (response : any) => {
    //     this.submitted = true;
    //     this.ErrorMessage = true;
    //     this.FormLogin.controls['Password'].reset();
    //   }
    // });
    this.submitted = false;
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.type = 'text' : this.type = 'password';
  }

  FormLogin = new FormGroup({
    Username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(55),
    ]),
  });
}
