import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  error: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  loginFormsInfo(loginForm: FormGroup) {
    this._AuthService.login(loginForm.value).subscribe((data) => {
      if (data.message == 'success') {
        localStorage.setItem('userToken', data.token);
        this._AuthService.saveUserToken();
        this._Router.navigate(['/home']);
      } else {
        this.error = data.message;
      }
    });
  }

  ngOnInit(): void {}
}
